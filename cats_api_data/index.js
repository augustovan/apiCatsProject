const express    = require("express");
const mongoose   = require("mongoose");
const requireDir = require("require-dir");

//iniciando o APP
const app = express();
app.use(express.json());

// iniciando o DB
mongoose.connect(
"mongodb://mongo:27017/catsapidb", 
{useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(5000);

// App
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;
// Probe de verificação de 5 em 5 segundos.
collectDefaultMetrics({ timeout: 5000 });

const counter = new client.Counter({
  name: 'node_request_operations_total',
  help: 'The total number of processed requests'
});

const histogram = new client.Histogram({
  name: 'node_request_duration_seconds',
  help: 'Histogram for the duration in seconds.',
  buckets: [1, 2, 5, 6, 10]
});

app.get('/', (req, res) => {


  var start = new Date()
  var simulateTime = 1000

  setTimeout(function(argument) {
    // tempo de execução 
    var end = new Date() - start
    histogram.observe(end / 1000); 
  }, simulateTime)

  counter.inc();
  
  res.send('Hello world\n');
});


// Metricas endpoint
app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(client.register.metrics())
});
