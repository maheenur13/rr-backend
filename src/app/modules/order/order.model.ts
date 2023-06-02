import { Schema, model } from "mongoose";
import {
  IOrder,
  IOrderModel,
  IOrderProduct,
  IOrderProductModel,
} from "./order.interface";

const orderProductSchema = new Schema<IOrderProduct, IOrderProductModel>({
  _id: {
    type: String,
    required: true,
  },
  barcode: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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
  stock_level: {
    type: String,
    required: true,
  },
  quantity:{
    type: Number,
    required: true,
  }
});

const orderSchema = new Schema<IOrder, IOrderModel>(
  {
    userEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    products: {
      type: [orderProductSchema],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    paymentStatus: { type: String, required: true },
  },
  { collection: "orders", timestamps: true }
);

const OrderModel = model<IOrder, IOrderModel>("orders", orderSchema);
export default OrderModel;
