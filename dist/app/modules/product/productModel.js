"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'product name must be required'],
    },
    description: {
        type: String,
        required: [true, 'description required'],
    },
    price: {
        type: Number,
        required: [true, 'product price required'],
    },
    category: {
        type: String,
        required: [true, 'category not given'],
    },
    tags: {
        type: [String],
        required: [true, 'tags not given'],
    },
    variants: {
        type: [
            {
                type: { type: String, required: true },
                value: { type: String, required: true },
            },
        ],
        required: [true, 'Variants must be provided'],
    },
    inventory: {
        quantity: {
            type: Number,
            required: [true, 'inventory quantity not given'],
        },
        inStock: {
            type: Boolean,
            required: [true, 'inStock not given'],
        },
    },
});
const productModel = (0, mongoose_1.model)('productModel', productSchema);
exports.default = productModel;
