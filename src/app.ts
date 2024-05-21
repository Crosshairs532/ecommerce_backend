/* eslint-disable no-undef */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRoute from './app/modules/product/productRoute';
import orderRoute from './app/modules/order/orderRoute';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('E-commerce is running');
});

export default app;
