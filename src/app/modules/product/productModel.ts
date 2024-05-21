import { Schema, model } from 'mongoose';
import { product } from './productInterface';

const productSchema = new Schema<product>({
  name: {
    type: String,
    required: [true, 'product name must be required'],
  },
  description: {
    type: String,
    required: [true, 'description required'],
  },
  price: {
    type: Number,
    required: [true, 'product price required'],
  },
  category: {
    type: String,
    required: [true, 'category not given'],
  },
  tags: {
    type: [String],
    required: [true, 'tags not given'],
  },
  variants: {
    type: [
      {
        type: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    required: [true, 'Variants must be provided'],
  },
  inventory: {
    quantity: {
      type: Number,
      required: [true, 'inventory quantity not given'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock not given'],
    },
  },
});
const productModel = model<product>('productModel', productSchema);
export default productModel;
