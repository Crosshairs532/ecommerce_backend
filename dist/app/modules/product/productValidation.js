"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const productValidation = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        'any.required': 'Product name is required.',
        'string.empty': 'Product name cannot be empty.',
    }),
    description: joi_1.default.string().required().messages({
        'any.required': 'Description is required.',
        'string.empty': 'Description cannot be empty.',
    }),
    price: joi_1.default.number().required().messages({
        'any.required': 'Product price is required.',
        'number.base': 'Product price must be a number.',
    }),
    category: joi_1.default.string().required().messages({
        'any.required': 'Category is required.',
        'string.empty': 'Category cannot be empty.',
    }),
    tags: joi_1.default.array().items(joi_1.default.string()).required().messages({
        'any.required': 'Tags are required.',
        'array.base': 'Tags must be an array.',
    }),
    variants: joi_1.default.array()
        .items(joi_1.default.object({
        type: joi_1.default.string().required().messages({
            'any.required': 'Variant type is required.',
            'string.empty': 'Variant type cannot be empty.',
        }),
        value: joi_1.default.string().required().messages({
            'any.required': 'Variant value is required.',
            'string.empty': 'Variant value cannot be empty.',
        }),
    }))
        .required()
        .messages({
        'any.required': 'Variants are required.',
        'array.base': 'Variants must be an array.',
    }),
    inventory: joi_1.default.object({
        quantity: joi_1.default.number().required().messages({
            'any.required': 'Inventory quantity is required.',
            'number.base': 'Inventory quantity must be a number.',
        }),
        inStock: joi_1.default.boolean().required().messages({
            'any.required': 'InStock status is required.',
            'boolean.base': 'InStock status must be a boolean.',
        }),
    })
        .required()
        .messages({
        'any.required': 'Inventory is required.',
    }),
});
exports.default = productValidation;
