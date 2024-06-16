const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const beerRoutes = require('./routes/beer');
const app = express();

mongoose.connect('mongodb://localhost:27017/beer_inventory', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/beer', beerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
