const express = require("express");
const routes  = express.Router();

const CatsController = require('./controllers/CatsControllers');

routes.get("/cats", CatsController.index);
routes.get("/cats/id=:id" , CatsController.getcats);
routes.get("/cats/t=:temperament" , CatsController.findtemperament);
routes.get("/cats/o=:origin" , CatsController.findorigen);
routes.get("/cats/b=:name" , CatsController.findbreed);
routes.post("/cats", CatsController.store);

module.exports = routes;


