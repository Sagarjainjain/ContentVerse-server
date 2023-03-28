import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    fact: String,
    profilePage: String,
    date: String
})

const Facts = mongoose.model("facts", postSchema)
export default Facts;