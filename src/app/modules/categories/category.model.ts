import { Schema, model } from "mongoose";
import { ICategory, ICategoryModel } from "./category.interface";

const categorySchema = new Schema<ICategory,ICategoryModel>(
  {
    category_name:{
        type:String,
        required:true
    }
        },
  { collection: "product_category_list" }
);

const CategoryModel = model<ICategory,ICategoryModel>(
  "product_category_list",
  categorySchema
);
export default CategoryModel;
