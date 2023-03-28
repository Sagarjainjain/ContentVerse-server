import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  customId: Number,
  title: String,
  discription: String,
  genre: [String],
  rating: Number,
  profilePage: String,
  coverPage: String,
});

const Performance = mongoose.model("performance", postSchema);

export default Performance;
