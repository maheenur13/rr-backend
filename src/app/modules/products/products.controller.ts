import { NextFunction, Request, Response } from "express";
import { IProduct } from "./products.interface";
import { addProductsToDB, getAllProductsFromDB, updateProductsToDB } from "./products.service";
import { Document, InsertManyResult, UpdateWriteOpResult } from "mongoose";

export const getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
   
    try {
        const products: Array<IProduct> = await getAllProductsFromDB();
        res.status(200).send({
            success: true,
            data: products,
            message:'Product found!'
          });
    } catch (error) {
        console.log(error);
    }
  };


  export const addProducts = async (req: Request, res: Response, next: NextFunction) => {
    const productsData = req.body;
    try {
      const products:InsertManyResult<Document> = await addProductsToDB(productsData);
      res.status(200).send({
          success: true,
          data: products,
          message:'inserted'
        });
    } catch (error) {
      console.log(error);
    }
   
  }
  export const updateProducts = async (req: Request, res: Response, next: NextFunction) => {
    const productsData = req.body;
    try {
      const products:UpdateWriteOpResult[] = await updateProductsToDB(productsData);
      res.status(200).send({
          success: true,
          data: [],
          message:products.length+' data updated successfully!'
        });
    } catch (error) {
      console.log(error);
      
    }
   
  }