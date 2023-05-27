"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    category_name: {
        type: String,
        required: true
    }
}, { collection: "product_category_list" });
const CategoryModel = (0, mongoose_1.model)("product_category_list", categorySchema);
exports.default = CategoryModel;
//# sourceMappingURL=category.model.js.map