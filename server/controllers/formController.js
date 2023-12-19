import Form from "../models/Form.js";
import mongoose from "mongoose";
import { getWeatherData } from "../services/weatherDataBase.js";

const getFormById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No form with that id");
    try {
        const form = await Form.findById(id);
        return form;
    } catch (error) {
        console.log(error);
        return error;
    }
};

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
    form.isCompleted = false;
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
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No form with that id");

    const obj = req.body;
    const { date_init } = await getFormById(id);
    const weatherData = await getWeatherData(date_init, obj.date_end);
    console.log(weatherData);
    if(weatherData.error) return res.status(404).send(weatherData.message);
    
    const updatedForm = { ...obj, ...weatherData, isCompleted: true };
    await Form.findByIdAndUpdate(id, updatedForm, { new: true });
    res.json(updatedForm);
};
