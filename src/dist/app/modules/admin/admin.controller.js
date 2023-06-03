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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_service_1 = __importDefault(require("./admin.service"));
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const adminData = req.body;
    try {
        const response = yield admin_service_1.default.createAdminToDB(adminData);
        if (response) {
            res.status(200).send({ success: true, message: 'Account created successfully', data: response });
        }
    }
    catch (error) {
        res.status(400).send({ success: false, message: String(error), data: null });
    }
});
const loginAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = req.body;
    // console.log(loginData);
    try {
        const response = yield admin_service_1.default.loginAdminFromDB(loginData);
        console.log(response);
        if (response) {
            res.status(200).send({ success: true, message: 'user logged in successfully', data: response });
        }
        else {
            res.status(400).send({ success: false, message: 'no user found or incorrect password', data: null });
        }
    }
    catch (error) {
        res.status(400).send({ success: false, message: String(error), data: null });
    }
});
const getAllAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield admin_service_1.default.getAllAdminFromDB();
        if (response) {
            res.status(200).send({ success: true, message: 'admin found', data: response });
        }
    }
    catch (error) {
        res.status(400).send({ success: false, message: String(error), data: null });
    }
});
exports.default = {
    createAdmin,
    loginAdmin,
    getAllAdmin
};
//# sourceMappingURL=admin.controller.js.map