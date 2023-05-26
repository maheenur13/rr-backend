import { Document, InsertManyResult, UpdateWriteOpResult } from "mongoose";
import { IProduct } from "./products.interface";
import ProductModel from "./products.model";

export const getAllProductsFromDB = async (): Promise<Array<IProduct>> => {
    return await ProductModel.find({});
  };

  export const addProductsToDB = async (products: IProduct[]): Promise<InsertManyResult<Document>> => {
    const productModel = new ProductModel(products);
    return await productModel.collection.insertMany(products);
  }
  export const updateProductsToDB = async (products: IProduct[]): Promise<UpdateWriteOpResult[]> => {
    const updatePromises = products.map((product) =>
    ProductModel.updateOne(
      { barcode: product?.barcode },
      { $set: { stock_level: product?.stock_level,category_id:product.category_id,description:product.description,image:product.image,price:product.price,product:product.product,size:product.size } }
    )
  );
  return await Promise.all(updatePromises);
  }