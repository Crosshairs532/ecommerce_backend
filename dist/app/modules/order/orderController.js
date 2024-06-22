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
exports.orderController = void 0;
const orderValidation_1 = __importDefault(require("./orderValidation"));
const orderService_1 = require("./orderService");
const orderModel_1 = __importDefault(require("./orderModel"));
const productService_1 = require("../product/productService");
const newOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { error, value } = orderValidation_1.default.validate(data);
    if (error) {
        return res.status(500).json({ success: false, message: 'something wrong' });
    }
    const checking = yield orderModel_1.default.orderMethodCheck(value.productId);
    // console.log(checking);
    if (checking) {
        if (checking.inventory.quantity >= data.quantity) {
            try {
                yield orderService_1.orderService.newOrder(value);
                yield productService_1.productService.updateProductService(checking, data.productId, 'order', data.quantity);
                return res.status(200).json({
                    success: true,
                    message: 'Order created successfully!',
                    data: value,
                });
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
        else {
            return res.json({
                success: false,
                message: `Insufficient quantity available in inventory`,
            });
        }
    }
    else {
        return res.json({
            success: false,
            message: 'Order not found',
        });
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    const { email } = req.query;
    if (Object.keys(req.query).length > 0 &&
        Object.keys(req.query)[0] != 'email') {
        return res.json({
            success: false,
            message: 'Route not found',
        });
    }
    if (email) {
        filter['email'] = email;
    }
    try {
        const result = yield orderService_1.orderService.getOrder(filter);
        if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
            return res.status(200).json({
                success: true,
                message: email
                    ? 'Orders fetched successfully for user email!'
                    : 'Orders fetched successfully!',
                data: result,
            });
        }
        else {
            return res.json({
                success: false,
                message: 'email does not exist',
            });
        }
    }
    catch (error) {
        res.json({ message: error.message });
    }
});
exports.orderController = { newOrder, getOrder };
