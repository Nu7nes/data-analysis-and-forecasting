import express from "express";
const router = express.Router();
import { getForms, createForm, deleteForm, updateForm } from "../controllers/formController.js";

router.get("/form", getForms);
router.post("/form", express.json(), createForm);
router.delete("/form/:id", deleteForm);
router.patch("/form/:id", express.json(), updateForm);

export default router;
