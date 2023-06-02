"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
const AdminModel = (0, mongoose_1.model)('Admins', adminSchema);
exports.default = AdminModel;
//# sourceMappingURL=admin.model.js.map