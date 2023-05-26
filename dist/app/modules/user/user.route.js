"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("./user.controller");
var router = express_1.default.Router();
router.post("/create-user", user_controller_1.createNewUser);
router.get("/user-list", user_controller_1.getUserList);
router.get("/admin-list", user_controller_1.getAdmins);
router.get("/:id", user_controller_1.getUserDetailsById);
exports.default = router;
