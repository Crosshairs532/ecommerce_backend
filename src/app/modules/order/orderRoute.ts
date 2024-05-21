import express from 'express';
import orderController from './orderController';
const orderRoute = express.Router();

orderRoute.get('', orderController.getOrder);
orderRoute.post('', orderController.newOrder);

export default orderRoute;
