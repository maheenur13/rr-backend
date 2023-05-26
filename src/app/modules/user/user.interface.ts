import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  role: "student";
  password: string;
  name: {
    firstName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contact: string;
  emergencyContact: string;
  address: {
    presentAddress: string;
    permanentAddress: string;
  };
}



export interface IUserMethods {
  firstName(): string;
}

export interface IUserModel extends Model<IUser,{},IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser,IUserMethods>>;
}