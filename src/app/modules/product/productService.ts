import { product } from './productInterface';
import productModel from './productModel';

const productService = async (products: product) => {
  try {
    const res = await productModel.create(products);
    return res;
  } catch (err) {
    return err;
  }
};

export default productService;
