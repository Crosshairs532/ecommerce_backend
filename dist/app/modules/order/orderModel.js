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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productService_1 = require("../product/productService");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'something wrong with {VALUE}'],
    },
    productId: {
        type: String,
        required: [true, 'something wrong with {VALUE}'],
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: [true, 'quantity require'],
    },
});
orderSchema.statics.orderMethodCheck = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const filter = { _id: new ObjectId(id) };
    const order = yield productService_1.productService.getProductService(id, null);
    return order[0];
});
const orderModel = (0, mongoose_1.model)('orderModel', orderSchema);
exports.default = orderModel;
