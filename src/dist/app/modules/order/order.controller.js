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
exports.addOrder = exports.getAllOrders = void 0;
const order_service_1 = require("./order.service");
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, order_service_1.getAllOrdersFromDB)();
        if (products.length) {
            res.status(200).send({
                success: true,
                data: products,
                message: "Order found!",
            });
        }
        else {
            res.status(200).send({
                success: true,
                data: [],
                message: "No Order found!",
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllOrders = getAllOrders;
const addOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.body;
    try {
        const orderResult = yield (0, order_service_1.addOrderToDB)(order);
        console.log(orderResult);
        if (orderResult) {
            res.status(200).send({
                success: true,
                data: orderResult,
                message: "Ordered inserted!",
            });
        }
        else {
            res.status(400).send({
                success: false,
                data: null,
                message: "Order cannot created",
            });
        }
    }
    catch (error) {
        res.status(500).send({
            success: false,
            data: null,
            message: String(error),
        });
    }
});
exports.addOrder = addOrder;
//# sourceMappingURL=order.controller.js.map