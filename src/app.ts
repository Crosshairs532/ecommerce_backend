/* eslint-disable no-undef */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.send('E-commerce is running');
});

export default app;
