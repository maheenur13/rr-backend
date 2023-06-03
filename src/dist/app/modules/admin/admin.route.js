"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = __importDefault(require("./admin.controller"));
const router = express_1.default.Router();
router.post('/sign-up', admin_controller_1.default.createAdmin);
router.post('/sign-in', admin_controller_1.default.loginAdmin);
router.get('/all-admin', admin_controller_1.default.getAllAdmin);
exports.default = router;
//# sourceMappingURL=admin.route.js.map