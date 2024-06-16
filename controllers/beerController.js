const Beer = require('../models/Beer');

exports.addBeer = async (req, res) => {
  const { name, stock, threshold } = req.body;

  const beer = new Beer({ name, stock, threshold });
  await beer.save();

  res.status(201).send('Beer added successfully');
};

exports.getBeers = async (req, res) => {
  const beers = await Beer.find();
  res.status(200).json(beers);
};

exports.updateBeer = async (req, res) => {
  const { id } = req.params;
  const { name, stock, threshold } = req.body;

  const beer = await Beer.findByIdAndUpdate(id, { name, stock, threshold }, { new: true });
  res.status(200).json(beer);
};

exports.deleteBeer = async (req, res) => {
  const { id } = req.params;

  await Beer.findByIdAndDelete(id);
  res.status(200).send('Beer deleted successfully');
};
