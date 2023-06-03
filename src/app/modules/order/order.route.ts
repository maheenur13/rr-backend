import express from "express";
import { addOrder, getAllOrders, updatePaymentStatus } from "./order.controller";

const router = express.Router();

router.get("/all-order", getAllOrders);
router.post("/add-order", addOrder);
router.patch("/update-status",updatePaymentStatus)


export default router;