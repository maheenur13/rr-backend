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
exports.updateProducts = exports.addProducts = exports.getAllProducts = void 0;
const products_service_1 = require("./products.service");
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, products_service_1.getAllProductsFromDB)();
        res.status(200).send({
            success: true,
            data: products,
            message: 'Product found!'
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllProducts = getAllProducts;
const addProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = req.body;
    try {
        const products = yield (0, products_service_1.addProductsToDB)(productsData);
        res.status(200).send({
            success: true,
            data: products,
            message: 'inserted'
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addProducts = addProducts;
const updateProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productsData = req.body;
    try {
        const products = yield (0, products_service_1.updateProductsToDB)(productsData);
        res.status(200).send({
            success: true,
            data: [],
            message: products.length + ' data updated successfully!'
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProducts = updateProducts;
//# sourceMappingURL=products.controller.js.map