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
exports.getAdmins = exports.getUserDetailsById = exports.getUserList = exports.createNewUser = void 0;
const user_service_1 = require("./user.service");
const createNewUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const user = yield (0, user_service_1.createUserDB)(userData);
    res.status(200).json({
        success: true,
        data: user,
    });
});
exports.createNewUser = createNewUser;
const getUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userList = yield (0, user_service_1.getAllUserFromDB)();
    res.status(200).json({
        success: true,
        data: userList,
    });
});
exports.getUserList = getUserList;
const getUserDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, user_service_1.getUserDetailsByIdFromDB)(id);
    res.status(200).json({ data: user, success: true });
});
exports.getUserDetailsById = getUserDetailsById;
const getAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield (0, user_service_1.getAllAdminFromDB)();
    res.status(200).json({ data: admins, success: true });
});
exports.getAdmins = getAdmins;
//# sourceMappingURL=user.controller.js.map