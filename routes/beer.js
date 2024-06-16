const express = require('express');
const { addBeer, getBeers, updateBeer, deleteBeer } = require('../controllers/beerController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addBeer);
router.get('/', auth, getBeers);
router.put('/:id', auth, updateBeer);
router.delete('/:id', auth, deleteBeer);

module.exports = router;
