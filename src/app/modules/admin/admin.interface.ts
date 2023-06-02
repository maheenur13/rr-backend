import { HydratedDocument, Model } from "mongoose";

export type IRoleType =
  | "super_admin"
  | "packaging"
  | "sales"
  | "customer_service"
  | "checker"
  | "admin";

export interface IAdmin {
  id: string;
  role: IRoleType;
  password: string;
  phoneNumber: string;
  name:string;
  status:'pending' | 'approved';
};

export interface ILogin {
    phoneNumber: string;
    password: string;
}

export interface IAdminModel extends Model<IAdmin> {
    getAdminUsers(): Promise<HydratedDocument<IAdmin>>;
}
