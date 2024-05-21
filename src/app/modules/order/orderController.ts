import { Request, Response } from 'express';
import orderValidationSchema from './orderValidation';
import orderService from './orderService';

let orderController = {};
const newOrder = async (req: Request, res: Response) => {
  const data = req.body;
  const { error, value } = orderValidationSchema.validate(data);
  if (error) {
    return res.status(500).json({ success: false, message: 'something wrong' });
  }
  try {
    const result = await orderService.newOrder(value);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: value,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOrder = async (req: Request, res: Response) => {};

export default orderController = { newOrder, getOrder };
