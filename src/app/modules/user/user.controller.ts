import { IUser } from "./user.interface";
import {
  createUserDB,
  getAllAdminFromDB,
  getAllUserFromDB,
  getUserDetailsByIdFromDB,
} from "./user.service";

import { NextFunction, Request, Response } from "express";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.body;

  const user: any = await createUserDB(userData);

  res.status(200).json({
    success: true,
    data: user,
  });
};

export const getUserList = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userList = await getAllUserFromDB();
  res.status(200).json({
    success: true,
    data: userList,
  });
};

export const getUserDetailsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserDetailsByIdFromDB(id);
  res.status(200).json({ data: user, success: true });
};

export const getAdmins = async (req:Request, res:Response) => {
    const admins = await getAllAdminFromDB();
    res.status(200).json({ data: admins, success: true });
}
