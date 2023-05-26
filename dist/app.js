"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var user_route_1 = __importDefault(require("./app/modules/user/user.route"));
var products_route_1 = __importDefault(require("./app/modules/products/products.route"));
var app = (0, express_1.default)();
// using cors
app.use((0, cors_1.default)());
// parse data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.get("api/v1/user", userRoute);
app.use('/api/v1/user', user_route_1.default);
app.use('/api/v1/products', products_route_1.default);
exports.default = app;
