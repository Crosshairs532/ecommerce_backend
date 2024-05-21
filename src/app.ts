/* eslint-disable no-undef */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRoute from './app/modules/product/productRoute';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', productRoute);
app.get('/', (req: Request, res: Response) => {
  res.send('E-commerce is running');
});

export default app;
