import express from "express";
import { getAllCategory } from "./category.controller";

const router = express.Router();

router.get("/category-list", getAllCategory);

export default router;