const mongoose = require('mongoose');

const Cats = mongoose.model('Cats');

module.exports = {
  async index(req, res){
    const cats = await Cats.find();

    return res.json(cats);
  },

  async getcats(req, res) {
    const catsp = await Cats.findById(req.params.id);

    return res.json(catsp);
  },

  async findbreed(req, res) {
    const catsp = await Cats.find({ Name: req.params.name },  function (err, docs) { });

    return res.json(catsp);
  },

  async findorigen(req, res) {
    const catsp = await  Cats.find({ origin: req.params.origin },  function (err, docs) { });

    return res.json(catsp);
  },

  async findtemperament(req, res) {
    const catsp = await Cats.find({ temperament: /loyal/  },  function (err, docs) { });

    return res.json(catsp);
  },

  async store(req, res) {
    const catsp = await Cats.create(req.body);

    return res.json(catsp);
  }
};