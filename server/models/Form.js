import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    date_init: String,
    weight_init: String,
    color_cassava: String,
    state_cassava: String,
    texture_cassava: String,
    external_help: String,
    date_end: String,
    weight_end: String,
    starch_end: String,
    how_fermented: String,
    description: String,
    main: String,
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number,
});

const Form = mongoose.model("Form", formSchema);

export default Form;
