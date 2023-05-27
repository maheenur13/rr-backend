import { NextFunction, Request, Response } from "express";
import { ICategory } from "./category.interface";
import { getAllCategoryFromDB } from "./category.service";

export const getAllCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
    try {
        const categories: Array<ICategory> = await getAllCategoryFromDB();
        res.status(200).send({
            success: true,
            data: categories,
            message:'category found!'
          });
    } catch (error) {
        console.log(error);
    }
  };