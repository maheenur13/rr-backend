"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.get("/all-order", order_controller_1.getAllOrders);
router.post("/add-order", order_controller_1.addOrder);
router.patch("/update-status", order_controller_1.updatePaymentStatus);
exports.default = router;
//# sourceMappingURL=order.route.js.map