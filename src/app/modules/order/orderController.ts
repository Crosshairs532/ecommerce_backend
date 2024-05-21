import { Request, Response } from 'express';
import orderValidationSchema from './orderValidation';
import orderService from './orderService';
import orderModel from './orderModel';
import productService from '../product/productService';

let orderController = {};
const newOrder = async (req: Request, res: Response) => {
  const data = req.body;
  const { error, value } = orderValidationSchema.validate(data);
  if (error) {
    return res.status(500).json({ success: false, message: 'something wrong' });
  }
  const checking = await orderModel.orderMethodCheck(value.productId);
  console.log(checking);
  if (checking) {
    if (checking.inventory.quantity >= data.quantity) {
      try {
        const result = await orderService.newOrder(value);
        const Minus = await productService.updateProductService(
          checking,
          data.productId,
          'order',
          data.quantity,
        );

        return res.status(200).json({
          success: true,
          message: 'Order created successfully!',
          data: value,
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    } else {
      return res.json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
  } else {
    return res.json({
      success: false,
      message: 'Order not found',
    });
  }
};
const getOrder = async (req: Request, res: Response) => {
  const filter = {};
  const { email } = req.query;

  if (email) {
    filter['email'] = email;
  }

  try {
    const result = await orderService.getOrder(filter);
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      return res.json({
        success: false,
        message: 'email does not exist',
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default orderController = { newOrder, getOrder };