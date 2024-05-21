import { Model, Schema, model } from 'mongoose';
import { order, orderMethod } from './orderInterface';
import { ObjectId } from 'bson';
import productService from '../product/productService';

const orderSchema = new Schema<order, orderMethod>({
  email: {
    type: String,
    required: [true, 'something wrong with {VALUE}'],
  },
  productId: {
    type: String,
    required: [true, 'something wrong with {VALUE}'],
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: [true, 'quantity require'],
  },
});
orderSchema.statics.orderMethodCheck = async (id: string) => {
  // const filter = { _id: new ObjectId(id) };
  const order = await productService.getProductService(id, null);
  return order[0];
};

const orderModel = model<order, orderMethod>('orderModel', orderSchema);
export default orderModel;
