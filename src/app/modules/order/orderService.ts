import { order } from './orderInterface';
import orderModel from './orderModel';

let orderService = {};
const newOrder = async (value: order) => {
  try {
    const res = await orderModel.create(value);
    return res;
  } catch (error) {
    return error;
  }
};
const getOrder = async (param: string | null) => {
  try {
    const res = await orderModel.find(param);
    return res;
  } catch (err) {
    return err;
  }
};

export default orderService = { newOrder, getOrder };
