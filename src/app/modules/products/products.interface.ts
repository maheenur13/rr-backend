import { Document, Model } from "mongoose";

type IStock = 'Out of Stock' | 'In Stock';

export interface IProduct {
    barcode:string;
    product:string;
    description?:string;
    category_id:string;
    size:string;
    price:number;
    image?:string;
    stock_level:IStock
}

export interface IProductModel extends Model<IProduct> {}