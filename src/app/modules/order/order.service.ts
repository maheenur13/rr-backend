import { UpdateWriteOpResult } from "mongoose";
import { IOrder, IUpdateStatus } from "./order.interface";
import OrderModel from "./order.model";

export const addOrderToDB = async (order: IOrder): Promise<IOrder> => {
  order.paymentStatus = "pending";
  const orderModel = new OrderModel({ ...order });
  return await orderModel.save();
};

export const getAllOrdersFromDB = async (): Promise<Array<IOrder>> => {
  return await OrderModel.find({});
};

export const updatePaymentStatusToDB = async (
  data: IUpdateStatus
): Promise<UpdateWriteOpResult> => {
  
  return await OrderModel.updateOne(
    { _id: data.id },
    { $set: { paymentStatus: data.status } }
  );

  
};
