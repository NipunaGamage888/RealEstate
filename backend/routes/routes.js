import express from "express";
import multer from "multer";
import { signup } from "../Controllers/userControllers.js";

const upload = multer({});
const router = express.Router();

router.post('/admin/signup', signup);

export default router;
