"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.get("/products-list", products_controller_1.getAllProducts);
router.post("/add-products", products_controller_1.addProducts);
router.patch("/update-products", products_controller_1.updateProducts);
// router.get("/user-list", getUserList);
// router.get("/admin-list", getAdmins);
// router.get("/:id", getUserDetailsById);
exports.default = router;
//# sourceMappingURL=products.route.js.map