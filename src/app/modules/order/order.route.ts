import express from "express";
import { addOrder, getAllOrders } from "./order.controller";

const router = express.Router();

router.get("/all-order", getAllOrders);
router.post("/add-order", addOrder);


export default router;