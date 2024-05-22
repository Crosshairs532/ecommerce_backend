"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("./productController"));
const productRoute = express_1.default.Router();
productRoute.get('/:productId?', productController_1.default.getProduct);
productRoute.post('', productController_1.default.createdProduct);
productRoute.put('/:productId?', productController_1.default.updateProduct);
productRoute.delete('/:productId?', productController_1.default.deleteProduct);
exports.default = productRoute;
