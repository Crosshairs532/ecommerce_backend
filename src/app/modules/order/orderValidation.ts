import Joi from 'joi';

const orderValidationSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Something wrong with {#label}',
    'string.email': 'Invalid email format',
  }),
  productId: Joi.string().required().messages({
    'any.required': 'Something wrong with {#label}',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
  quantity: Joi.number().required().messages({
    'any.required': 'Quantity is required',
    'number.base': 'Quantity must be a number',
  }),
});

export default orderValidationSchema;
