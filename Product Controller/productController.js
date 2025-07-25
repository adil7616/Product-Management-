import products from '../Data/products.json' assert { type: 'json' };
export const getAllProducts = (req, res) => {
    const { category } = req.query;

    if (category) {
        const filteredProducts = products.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        );
        return res.status(200).json(filteredProducts);
    }

    res.status(200).json(products);
};\



export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
};


export const createProduct = (req, res) => {
    const { id, name, category, price } = req.body;
    if (!id || !name || !category || price === undefined || isNaN(price) || price < 0) {
        return res.status(400).json({
            message: 'All fields are required and price must be a valid non-negative number'
        });
    }

    const exists = products.some(p => p.id === id);
    if (exists) {
        return res.status(409).json({ message: 'Product with this ID already exists' });
    }
    const newProduct = { id, name, category, price };
    products.push(newProduct); 
    res.status(201).json(newProduct);
};
