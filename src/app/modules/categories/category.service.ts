import { ICategory } from "./category.interface";
import CategoryModel from "./category.model";

export const getAllCategoryFromDB = async (): Promise<Array<ICategory>> => {
    return await CategoryModel.find({});
  };