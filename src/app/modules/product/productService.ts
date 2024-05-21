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
const getProductService = async (productId: string) => {
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
const updateProductService = async (Uproduct: product, productId: string) => {
  const res = await productModel.findByIdAndUpdate(
    { _id: productId },
    { $set: Uproduct },
    {
      new: true,
    },
  );
  return res;
};

const deleteProductService = async (productId: string) => {
  try {
    const res = await productModel.findByIdAndDelete(
      { _id: productId },
      { new: true },
    );
    return res;
  } catch (err) {
    return err;
  }
};

export default productService = {
  createProduct,
  getProductService,
  updateProductService,
  deleteProductService,
};
