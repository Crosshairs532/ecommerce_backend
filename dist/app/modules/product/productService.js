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
exports.productService = void 0;
const productModel_1 = __importDefault(require("./productModel"));
const createProduct = (products) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield productModel_1.default.create(products);
        return res;
    }
    catch (err) {
        return err;
    }
});
const getProductService = (productId, searchParam) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    //   console.log(filter, productId);
    if (productId) {
        filter._id = productId;
    }
    if (searchParam) {
        filter = {
            $or: [
                { name: { $regex: new RegExp(searchParam, 'i') } },
                { description: { $regex: new RegExp(searchParam, 'i') } },
                { category: { $regex: new RegExp(searchParam, 'i') } },
            ],
        };
    }
    try {
        const result = yield productModel_1.default.find(filter);
        return result;
    }
    catch (error) {
        return error;
    }
});
const updateProductService = (Uproduct_1, productId_1, ...args_1) => __awaiter(void 0, [Uproduct_1, productId_1, ...args_1], void 0, function* (Uproduct, productId, isCheck = 'product', quantity = 0) {
    if (isCheck == 'product') {
        const res = yield productModel_1.default.findByIdAndUpdate({ _id: productId }, { $set: Uproduct }, {
            new: true,
        });
        return res;
    }
    else if (isCheck == 'order') {
        // console.log(Uproduct);
        yield productModel_1.default.updateOne({ _id: productId }, {
            $inc: {
                'inventory.quantity': -quantity,
            },
        }, {
            new: true,
        });
        if (Uproduct.inventory.quantity - quantity <= 0) {
            yield productModel_1.default.updateOne({ _id: productId }, {
                $set: {
                    name: Uproduct.name,
                    description: Uproduct.description,
                    price: Uproduct.price,
                    category: Uproduct.category,
                    tags: Uproduct.tags,
                    variants: Uproduct.variants,
                    inventory: {
                        quantity: Uproduct.inventory.quantity - quantity,
                        inStock: false,
                    },
                },
            }, {
                new: true,
            });
        }
        return;
    }
});
const deleteProductService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield productModel_1.default.findByIdAndDelete({ _id: productId }, { new: true });
        return res;
    }
    catch (err) {
        return err;
    }
});
exports.productService = {
    createProduct,
    getProductService,
    updateProductService,
    deleteProductService,
};
