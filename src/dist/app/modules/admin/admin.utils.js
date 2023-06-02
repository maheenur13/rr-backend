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
exports.generateAdminID = exports.findLastAdminId = void 0;
const admin_model_1 = __importDefault(require("./admin.model"));
const findLastAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastUser = yield admin_model_1.default.findOne({}, { id: 1, _id: 0 })
        .sort({
        createdAt: -1,
    })
        .lean();
    return lastUser === null || lastUser === void 0 ? void 0 : lastUser.id;
});
exports.findLastAdminId = findLastAdminId;
const generateAdminID = (role) => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = yield (0, exports.findLastAdminId)();
    const preText = `rr-${role}-`;
    if (currentId) {
        const regex = /^(.*-)(\d+)$/; // Regular expression to match the desired pattern
        const [, prefix, suffix] = currentId.match(regex);
        currentId = String(parseInt(suffix) + 1);
    }
    else {
        currentId = "1";
    }
    return preText + String(currentId).padStart(5, "0");
});
exports.generateAdminID = generateAdminID;
//# sourceMappingURL=admin.utils.js.map