import bodyParser from 'body-parser';
import express from 'express';
import productsRouter from './Routes/ProductRoutes.js';

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Mount the products router on /products path
app.use('/products', productsRouter);

// Default route for API home
app.get('/', (req, res) => {
    res.send('Welcome to the Product Management API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
