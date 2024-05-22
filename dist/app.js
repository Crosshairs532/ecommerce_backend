"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const productRoute_1 = __importDefault(require("./app/modules/product/productRoute"));
const orderRoute_1 = __importDefault(require("./app/modules/order/orderRoute"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/products', productRoute_1.default);
app.use('/api/orders', orderRoute_1.default);
app.get('/', (req, res) => {
    res.send('E-commerce is running');
});
app.use((req, res) => {
    return res.json({
        success: false,
        message: 'Route not found',
    });
});
exports.default = app;
