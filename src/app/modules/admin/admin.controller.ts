import { Request, Response } from "express";
import adminService from "./admin.service";
import { IAdmin, ILogin } from "./admin.interface";

const createAdmin = async (req: Request, res: Response) => {
    const adminData:IAdmin = req.body;

    try {
        const response: IAdmin = await adminService.createAdminToDB(adminData);
    if(response) {
        res.status(200).send({success: true,message: 'Account created successfully',data: response});
    }
    } catch (error) {
        res.status(400).send({success: false,message: String(error),data: null});
    }
};
const loginAdmin = async (req: Request, res: Response) => {
    const loginData:ILogin = req.body;
// console.log(loginData);

    try {
        const response: IAdmin = await adminService.loginAdminFromDB(loginData);
        console.log(response);
        
    if(response) {
        res.status(200).send({success: true,message: 'user logged in successfully',data: response});
    }
    else {
        res.status(400).send({success: false,message: 'no user found or incorrect password',data: null});
    }
    } catch (error) {
        res.status(400).send({success: false,message: String(error),data: null});
    }
};


export default {
    createAdmin,
    loginAdmin
}
