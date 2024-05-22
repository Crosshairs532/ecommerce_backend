"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const orderValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'any.required': 'Something wrong with {#label}',
        'string.email': 'Invalid email format',
    }),
    productId: joi_1.default.string().required().messages({
        'any.required': 'Something wrong with {#label}',
    }),
    price: joi_1.default.number().required().messages({
        'any.required': 'Price is required',
        'number.base': 'Price must be a number',
    }),
    quantity: joi_1.default.number().required().messages({
        'any.required': 'Quantity is required',
        'number.base': 'Quantity must be a number',
    }),
});
exports.default = orderValidationSchema;
