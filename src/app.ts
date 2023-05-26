import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRoute from "./app/modules/user/user.route";
import productsRoute from "./app/modules/products/products.route";

const app: Application = express();

// using cors
app.use(cors());
 
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("api/v1/user", userRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/products',productsRoute);

export default app;
