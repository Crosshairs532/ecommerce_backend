"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("./orderController");
const orderRoute = express_1.default.Router();
orderRoute.get('', orderController_1.orderController.getOrder);
orderRoute.post('', orderController_1.orderController.newOrder);
exports.default = orderRoute;
