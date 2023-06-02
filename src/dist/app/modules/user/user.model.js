"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// type IUserModel = Model<IUser,{}, IUserMethods>
// creating schema
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    email: {
        type: String,
    },
    contact: {
        type: String,
        required: true
    },
    emergencyContact: {
        type: String,
        required: true
    },
    address: {
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    },
});
// custom instance method
// userSchema.method("fullName", function () {
//     return this.name.firstName + " " + this.name.lastName;
// })
// custom static method
// userSchema.static("getAdminUsers", async function getAdminUsers() {
//     return await this.find({role:'admin'})
// })
// creating the model
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map