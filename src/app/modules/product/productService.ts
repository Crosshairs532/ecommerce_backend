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
const getProductService = async (
  productId: string | null,
  searchParam: string | null,
) => {
  let filter = {};

  //   console.log(filter, productId);
  if (productId) {
    filter._id = productId;
  }
  if (searchParam) {
    filter = {
      $or: [
        { name: { $regex: new RegExp(searchParam, 'i') } },
        { description: { $regex: new RegExp(searchParam, 'i') } },
        { category: { $regex: new RegExp(searchParam, 'i') } },
      ],
    };
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
