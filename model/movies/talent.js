import mongoose from "mongoose";

const postSchema = mongoose.Schema({

  title: String,
  discription: String,
  talent: String,
  genre: [String],
  rating: Number,
  profilePage: String,
  coverPage: String,
});

const Talent = mongoose.model("Talent", postSchema);

export default Talent;
