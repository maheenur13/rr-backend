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
exports.getAllAdminFromDB = exports.getUserDetailsByIdFromDB = exports.getAllUserFromDB = exports.createUserDB = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUserDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // defining user model
    const user = new user_model_1.default(payload);
    return yield user.save();
});
exports.createUserDB = createUserDB;
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.find();
});
exports.getAllUserFromDB = getAllUserFromDB;
const getUserDetailsByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne({ id: id }, { name: 1 });
});
exports.getUserDetailsByIdFromDB = getUserDetailsByIdFromDB;
const getAllAdminFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.getAdminUsers();
});
exports.getAllAdminFromDB = getAllAdminFromDB;
//# sourceMappingURL=user.service.js.map