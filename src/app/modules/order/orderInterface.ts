import { Model } from 'mongoose';

export type order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

/* statics method */
export interface orderMethod extends Model<order> {
  orderMethodCheck: any;
  checkQuantity(id: string): Promise<order | null>;
}
