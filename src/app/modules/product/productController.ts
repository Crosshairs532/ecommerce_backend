import { Request, Response } from 'express';
import productService from './productService';
import productValidation from './productValidation';
import productModel from './productModel';

const createdProduct = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data, 'data');
  try {
    const { error, value } =
      productValidation.validate(data); /* validate using joi*/
    if (error) {
      return res.status(500).json({ message: error });
    }
    const result = await productService(data);
    return res.status(200).json({
      success: true,
      message: 'product Created successfully',
      data: value,
    });
  } catch (err: unknown) {
    res.status(500).json({ message: err.message });
  }
};
const getProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const filter = {};
  console.log(filter, productId);
  if (productId) {
    filter._id = productId;
  }

  try {
    const result = await productModel.find(filter);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProduct = (res: Response, req: Request) => {};
const deleteProduct = (res: Response, req: Request) => {};

export default { createdProduct, getProduct, updateProduct, deleteProduct };
