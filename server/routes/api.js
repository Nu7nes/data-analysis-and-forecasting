import express from "express";
const router = express.Router();
import { getForms, createForm, deleteForm, updateForm } from "../controllers/formController.js";
import { backupAndDownload, clearTempFiles } from "../controllers/backupController.js";

router.get("/form", getForms);
router.get("/backup", backupAndDownload)
router.patch("/backup", clearTempFiles)
router.post("/form", express.json(), createForm);
router.delete("/form/:id", deleteForm);
router.patch("/form/:id", express.json(), updateForm);

export default router;
