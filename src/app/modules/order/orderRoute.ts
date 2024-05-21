import express from 'express';
import orderController from './orderController';
const orderRoute = express.Router();

orderRoute.get('/:productId?', orderController.getOrder);
orderRoute.post('', orderController.newOrder);

export default orderRoute;
