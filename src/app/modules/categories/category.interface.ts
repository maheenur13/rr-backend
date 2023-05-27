import { Model, model } from "mongoose";

export interface ICategory {
    category_name: string;
}

export interface ICategoryModel extends Model<ICategory> {}