import { product } from './productInterface';
import productModel from './productModel';

let productService = {};
const createProduct = async (products: product) => {
  try {
    const res = await productModel.create(products);
    return res;
  } catch (err) {
    return err;
  }
};
const getProductService = async (productId: { productId: string }) => {
  const filter = {};
  //   console.log(filter, productId);
  if (productId) {
    filter._id = productId;
  }
  try {
    const result = await productModel.find(filter);
    return result;
  } catch (error) {
    return error;
  }
};
export default productService = { createProduct, getProductService };
