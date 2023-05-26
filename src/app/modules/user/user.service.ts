import { IUser } from "./user.interface";
import UserModel from "./user.model";

export const createUserDB = async (payload: IUser): Promise<IUser> => {
  // defining user model
  const user = new UserModel(payload);
  return await user.save();
};

export const getAllUserFromDB = async (): Promise<Array<IUser>> => {
  
  return await UserModel.find();
};

export const getUserDetailsByIdFromDB = async (
  id: string
): Promise<IUser | null> => {
  return await UserModel.findOne({ id: id }, { name: 1 });
};

export const getAllAdminFromDB = async ()=>{
  return await UserModel.getAdminUsers()
}
