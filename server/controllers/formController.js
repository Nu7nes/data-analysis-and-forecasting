import Form from "../models/Form.js";
import mongoose from "mongoose";

export const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createForm = async (req, res) => {
    const form = req.body;
    const newForm = new Form(form);
    try {
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deleteForm = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No form with that id");
    await Form.findByIdAndDelete(id);
    res.json({ message: "Form deleted successfully" });
};

export const updateForm = async (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No form with that id");
    const updatedForm = obj;
    await Form.findByIdAndUpdate(id, updatedForm, { new: true });
    res.json(updatedForm);
};
