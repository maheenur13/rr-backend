import express from "express";
import { createNewUser, getAdmins, getUserDetailsById, getUserList } from "./user.controller";

const router = express.Router();

router.post("/create-user", createNewUser);
router.get("/user-list", getUserList);
router.get("/admin-list", getAdmins);
router.get("/:id", getUserDetailsById);

export  default router;
