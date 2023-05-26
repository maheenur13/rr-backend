"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    barcode: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    category_id: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    size: {
        type: String,
    },
    stock_level: {
        type: String,
        required: true,
    },
}, { collection: "product_list" });
var ProductModel = (0, mongoose_1.model)("product_list", productSchema);
exports.default = ProductModel;
