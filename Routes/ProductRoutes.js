import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById
} from '../Product Controller/productController.js ';

const router = express.Router();
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);

export default router;
