const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  threshold: { type: Number, required: true }
});

module.exports = mongoose.model('Beer', beerSchema);
