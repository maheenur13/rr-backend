import { Model } from "mongoose";

export type IPayment = 'pending' | 'paid';

export interface IOrderProduct  {
    _id?: string;
	barcode: string;
	product: string;
	description: string;
	category_id: string;
	price: number;
	image: string;
	stock_level: string;
    quantity: number;
};


export interface IOrder {
    userEmail:string;
    products:IOrderProduct[];
    quantity:number;
    paymentStatus:IPayment;
    phoneNumber:string;
    total:number;
}

export type IUpdateStatus = {
    status: IPayment;
    id:string;
}

export interface IOrderProductModel extends Model<IOrder['products']> {}
export interface IOrderModel extends Model<IOrder> {}