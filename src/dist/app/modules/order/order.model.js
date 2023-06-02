"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderProductSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
    },
    barcode: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
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
    stock_level: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});
const orderSchema = new mongoose_1.Schema({
    userEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    products: {
        type: [orderProductSchema],
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    paymentStatus: { type: String, required: true },
}, { collection: "orders", timestamps: true });
const OrderModel = (0, mongoose_1.model)("orders", orderSchema);
exports.default = OrderModel;
//# sourceMappingURL=order.model.js.map