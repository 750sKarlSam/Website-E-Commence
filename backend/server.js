const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas Connection
const uri = process.env.MONGODB_URI; // Use an environment variable for security
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Schema and Model
const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    image: String,
    location: String,
    availableInventory: Number
});
const Product = mongoose.model('Product', ProductSchema);

// API Routes
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/order', async (req, res) => {
    const order = req.body; // Handle orders here (e.g., save them to a database or send confirmation)
    res.json({ message: 'Order received', order });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
