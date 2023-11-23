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
    description_init: String,
    main_init: String,
    temp_init: Number,
    feels_like_init: Number,
    temp_min_init: Number,
    temp_max_init: Number,
    pressure_init: Number,
    humidity_init: Number,
    sea_level_init: Number,
    grnd_level_init: Number,
    description_end: String,
    main_end: String,
    temp_end: Number,
    feels_like_end: Number,
    temp_min_end: Number,
    temp_max_end: Number,
    pressure_end: Number,
    humidity_end: Number,
    sea_level_end: Number,
    grnd_level_end: Number,
});

const Form = mongoose.model("Form", formSchema);

export default Form;
