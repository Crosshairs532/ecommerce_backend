import Joi from 'joi';

const productValidation = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Product name is required.',
    'string.empty': 'Product name cannot be empty.',
  }),
  description: Joi.string().required().messages({
    'any.required': 'Description is required.',
    'string.empty': 'Description cannot be empty.',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Product price is required.',
    'number.base': 'Product price must be a number.',
  }),
  category: Joi.string().required().messages({
    'any.required': 'Category is required.',
    'string.empty': 'Category cannot be empty.',
  }),
  tags: Joi.array().items(Joi.string()).required().messages({
    'any.required': 'Tags are required.',
    'array.base': 'Tags must be an array.',
  }),
  variants: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required().messages({
          'any.required': 'Variant type is required.',
          'string.empty': 'Variant type cannot be empty.',
        }),
        value: Joi.string().required().messages({
          'any.required': 'Variant value is required.',
          'string.empty': 'Variant value cannot be empty.',
        }),
      }),
    )
    .required()
    .messages({
      'any.required': 'Variants are required.',
      'array.base': 'Variants must be an array.',
    }),
  inventory: Joi.object({
    quantity: Joi.number().required().messages({
      'any.required': 'Inventory quantity is required.',
      'number.base': 'Inventory quantity must be a number.',
    }),
    inStock: Joi.boolean().required().messages({
      'any.required': 'InStock status is required.',
      'boolean.base': 'InStock status must be a boolean.',
    }),
  })
    .required()
    .messages({
      'any.required': 'Inventory is required.',
    }),
});
export default productValidation;
