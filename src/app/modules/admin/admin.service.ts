import { IAdmin, ILogin } from "./admin.interface";
import AdminModel from "./admin.model";
import { generateAdminID } from "./admin.utils";

const createAdminToDB = async (payload: IAdmin): Promise<IAdmin> => {
  const id = await generateAdminID(payload.role);

  payload.status = "pending";
  // setting default id for every admin
  payload.id = id;

  // defining user model
  const admin = new AdminModel(payload);
  return await admin.save();
};

const loginAdminFromDB = async (payload: ILogin): Promise<IAdmin> => {
  return await AdminModel.findOne({
    phoneNumber: payload.phoneNumber,
    password: payload.password,
  });
};

export default {
  createAdminToDB,
  loginAdminFromDB,
};
