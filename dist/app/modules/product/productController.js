"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productValidation_1 = __importDefault(require("./productValidation"));
const productService_1 = require("./productService");
const createdProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const { error, value } = productValidation_1.default.validate(data); /* validate using joi*/
        if (error) {
            return res.status(500).json({ message: error });
        }
        yield productService_1.productService.createProduct(data);
        return res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: value,
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { searchTerm } = req.query;
    console.log(Object.keys(req.query)[0]);
    if (Object.keys(req.query).length > 0 &&
        Object.keys(req.query)[0] != 'searchTerm') {
        return res.json({
            success: false,
            message: 'Route not found',
        });
    }
    try {
        const result = yield productService_1.productService.getProductService(productId, searchTerm);
        // console.log(result, 'result');
        if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
            res.status(200).json({
                success: true,
                message: searchTerm
                    ? `Products matching search term '${searchTerm}' fetched successfully!`
                    : `Product fetched successfully!`,
                data: result,
            });
        }
        else {
            res.status(500).json({ success: false, message: 'no such value exists' });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const { error, value } = productValidation_1.default.validate(req.body);
    if (error) {
        return res.status(500).json({ message: error.details });
    }
    try {
        const result = yield productService_1.productService.updateProductService(value, productId);
        res.json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (err) {
        res.json({ message: err.message });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    try {
        const result = yield productService_1.productService.deleteProductService(productId);
        if (result) {
            res.json({
                success: true,
                message: 'Product deleted successfully!',
                data: null,
            });
        }
        else {
            res.json({
                success: false,
                message: 'Product does not exist!',
            });
        }
    }
    catch (err) {
        res.json({ message: err.message });
    }
});
exports.default = { createdProduct, getProduct, updateProduct, deleteProduct };
