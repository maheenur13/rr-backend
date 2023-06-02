import { IOrder } from "./order.interface";
import OrderModel from "./order.model";

export const addOrderToDB = async (order: IOrder): Promise<IOrder> => {
  order.paymentStatus = "pending";
  const orderModel = new OrderModel({ ...order });
  return await orderModel.save();
};

export const getAllOrdersFromDB = async (): Promise<Array<IOrder>> => {
  return await OrderModel.find({});
};
