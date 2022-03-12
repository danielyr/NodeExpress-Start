import express from "express";
import * as exampleController from "./exampleController.js";

const router = express.Router();

router.get("/", exampleController.getExample);

export default router;
