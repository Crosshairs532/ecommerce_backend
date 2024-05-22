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
exports.orderService = void 0;
const orderModel_1 = __importDefault(require("./orderModel"));
const newOrder = (value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield orderModel_1.default.create(value);
        return res;
    }
    catch (error) {
        return error;
    }
});
const getOrder = (param) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield orderModel_1.default.find(param);
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.orderService = { newOrder, getOrder };
