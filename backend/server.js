const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize express app
const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://ramu:ramu123@cluster0.nisfefj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Product Schema
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Number,
    discount: Number,
    offerPrice: Number,
    reviews: [String]
});
const Product = mongoose.model('Product', ProductSchema);

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    fatherName: String,
    dob: String,
    branch: String,
    rollNo: String,
    section: String,
    address: String,
    mobileNo: String,
    password: String,
});
const User = mongoose.model('User', UserSchema);

// Add Product Route
app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send({ message: 'Product added successfully' });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send({ message: 'Error adding product, please try again' });
    }
});

// Get All Products Route
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ message: 'Error fetching products, please try again' });
    }
});

// User Signup Route
app.post('/api/signup', async (req, res) => {
    try {
        const { password, ...userData } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ ...userData, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send({ message: 'Error during signup, please try again' });
    }
});

// User Sign-in Route
// User Sign-in Route
app.post('/api/signin', async (req, res) => {
    try {
        const { rollNo, password } = req.body;
        const user = await User.findOne({ rollNo });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
        res.status(200).send({ message: 'Login successful', token });
    } catch (error) {
        console.error("Error during signin:", error);
        res.status(500).send({ message: 'Error during signin, please try again' });
    }
});


// Middleware for JWT validation (for protected routes)
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ message: 'Access denied, no token provided' });

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) return res.status(403).send({ message: 'Invalid token' });
        req.user = decoded;
        next();
    });
};

// Example of a protected route
app.get('/api/user', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) return res.status(404).send({ message: 'User not found' });
        res.status(200).send(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).send({ message: 'Error fetching user' });
    }
});

// Start the server
app.listen(5000, () => console.log('Server running on port 5000'));
