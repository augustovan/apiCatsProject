const mongoose = require('mongoose');

const CatsSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  temperament: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },

});

mongoose.model('Cats', CatsSchema);