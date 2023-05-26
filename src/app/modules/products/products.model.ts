import { Schema, model } from "mongoose";
import { IProduct, IProductModel } from "./products.interface";

const productSchema = new Schema<IProduct,IProductModel>(
  {
              barcode: {
                type: String,
                required: true,
                unique: true,
              },
              description: {
                type: String,
              },
              category_id: {
                type: String,
                required: true,
              },
              image: {
                type: String,
              },
              price: {
                type: Number,
                required: true,
              },
              product: {
                type: String,
                required: true,
              },
              size: {
                type: String,
              },
              stock_level: {
                type: String,
                required: true,
              },
        
        },
  { collection: "product_list" }
);

const ProductModel = model<IProduct,IProductModel>(
  "product_list",
  productSchema
);
export default ProductModel;
