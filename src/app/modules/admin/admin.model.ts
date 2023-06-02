import { Schema, model } from "mongoose";
import { IAdmin, IAdminModel } from "./admin.interface";

const adminSchema = new Schema<IAdmin, IAdminModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name:{
    type:String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status:{
    type: String,
    required: true,
  }
},
{
    timestamps:true
}
);


 const AdminModel = model<IAdmin,IAdminModel>('Admins',adminSchema);
 export default AdminModel;
