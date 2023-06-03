import { NextFunction, Request, Response } from "express";
import { IOrder, IUpdateStatus } from "./order.interface";
import { addOrderToDB, getAllOrdersFromDB, updatePaymentStatusToDB } from "./order.service";

export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products: Array<IOrder> = await getAllOrdersFromDB();
    if (products.length) {
      res.status(200).send({
        success: true,
        data: products,
        message: "Order found!",
      });
    } else {
      res.status(200).send({
        success: true,
        data: [],
        message: "No Order found!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const order: IOrder = req.body;
  try {
    const orderResult: IOrder = await addOrderToDB(order);
    // console.log(orderResult);
    if (orderResult) {
      res.status(200).send({
        success: true,
        data: orderResult,
        message: "Ordered inserted!",
      });
    } else {
      res.status(400).send({
        success: false,
        data: null,
        message: "Order cannot created",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      data: null,
      message: String(error),
    });
  }
};

export const updatePaymentStatus = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  const data:IUpdateStatus = req.body;
  try {
    const result = await updatePaymentStatusToDB(data);
    if(result) {
      res.status(200).json({
        success:true,
        message:'updated successfully!',
        data:null
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'internal server error',
      data:null
    })
  }
}
