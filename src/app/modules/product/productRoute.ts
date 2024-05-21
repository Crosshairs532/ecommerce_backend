import express from 'express';
import productController from './productController';
const productRoute = express.Router();

productRoute.get('/:productId?', productController.getProduct);
productRoute.post('', productController.createdProduct);
productRoute.put('/:productId?', productController.updateProduct);
productRoute.delete('', productController.deleteProduct);

export default productRoute;
