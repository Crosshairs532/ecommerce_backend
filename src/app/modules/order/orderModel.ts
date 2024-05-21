import { Schema, model } from 'mongoose';
import { order } from './orderInterface';

const orderSchema = new Schema<order>({
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

const orderModel = model<order>('orderModel', orderSchema);
export default orderModel;
