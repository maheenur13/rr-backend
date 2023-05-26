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
exports.updateProductsToDB = exports.addProductsToDB = exports.getAllProductsFromDB = void 0;
const products_model_1 = __importDefault(require("./products.model"));
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield products_model_1.default.find({});
});
exports.getAllProductsFromDB = getAllProductsFromDB;
const addProductsToDB = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new products_model_1.default(products);
    return yield productModel.collection.insertMany(products);
});
exports.addProductsToDB = addProductsToDB;
const updateProductsToDB = (products) => __awaiter(void 0, void 0, void 0, function* () {
    const updatePromises = products.map((product) => products_model_1.default.updateOne({ barcode: product === null || product === void 0 ? void 0 : product.barcode }, { $set: { stock_level: product === null || product === void 0 ? void 0 : product.stock_level, category_id: product.category_id, description: product.description, image: product.image, price: product.price, product: product.product, size: product.size } }));
    return yield Promise.all(updatePromises);
});
exports.updateProductsToDB = updateProductsToDB;
//# sourceMappingURL=products.service.js.map