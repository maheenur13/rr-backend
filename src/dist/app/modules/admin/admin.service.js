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
const admin_model_1 = __importDefault(require("./admin.model"));
const admin_utils_1 = require("./admin.utils");
const createAdminToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const id = yield (0, admin_utils_1.generateAdminID)(payload.role);
    payload.status = "pending";
    // setting default id for every admin
    payload.id = id;
    // defining user model
    const admin = new admin_model_1.default(payload);
    return yield admin.save();
});
const loginAdminFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield admin_model_1.default.findOne({
        phoneNumber: payload.phoneNumber,
        password: payload.password,
    });
});
exports.default = {
    createAdminToDB,
    loginAdminFromDB,
};
//# sourceMappingURL=admin.service.js.map