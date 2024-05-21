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
  const { searchTerm } = req.query;
  console.log(searchTerm);

  try {
    const result = await productService.getProductService(
      productId,
      searchTerm,
    );
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

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { error, value } = productValidation.validate(req.body);
  if (error) {
    return res.status(500).json({ message: error.details });
  }
  try {
    const result = await productService.updateProductService(value, productId);
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const result = await productService.deleteProductService(productId);
    res.json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export default { createdProduct, getProduct, updateProduct, deleteProduct };
