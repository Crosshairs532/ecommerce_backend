/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

/* statics method */

export interface orderMethod extends Model<order> {
  orderMethodCheck;
  checkQuantity(id: string): Promise<order | null>;
}
