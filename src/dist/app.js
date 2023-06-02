"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
const products_route_1 = __importDefault(require("./app/modules/products/products.route"));
const category_route_1 = __importDefault(require("./app/modules/categories/category.route"));
const order_route_1 = __importDefault(require("./app/modules/order/order.route"));
const admin_route_1 = __importDefault(require("./app/modules/admin/admin.route"));
const app = (0, express_1.default)();
// using cors
app.use((0, cors_1.default)());
// parse data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.get("api/v1/user", userRoute);
app.use('/api/v1/user', user_route_1.default);
app.use('/api/v1/products', products_route_1.default);
app.use('/api/v1/category', category_route_1.default);
app.use('/api/v1/order', order_route_1.default);
app.use('/api/v1/admin', admin_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map