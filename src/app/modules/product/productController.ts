import { Request, Response } from 'express';

import productValidation from './productValidation';
import productService from './productService';

const createdProduct = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const { error, value } =
      productValidation.validate(data); /* validate using joi*/
    if (error) {
      return res.status(500).json({ message: error });
    }
    const result = await productService.createProduct(data);
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
  try {
    const result = await productService.getProductService(productId);
    // console.log(result, 'result');
    if (result?.length > 0) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    } else {
      res.status(500).json({ success: false, message: 'no such value exists' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateProduct = (res: Response, req: Request) => {
  const { productId } = req.params;
};
const deleteProduct = (res: Response, req: Request) => {};

export default { createdProduct, getProduct, updateProduct, deleteProduct };
