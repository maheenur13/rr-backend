import express from "express";
import { addProducts, getAllProducts, updateProducts } from "./products.controller";

const router = express.Router();

router.get("/products-list", getAllProducts);
router.post("/add-products", addProducts);
router.patch("/update-products", updateProducts);
// router.get("/user-list", getUserList);
// router.get("/admin-list", getAdmins);
// router.get("/:id", getUserDetailsById);

export default router;