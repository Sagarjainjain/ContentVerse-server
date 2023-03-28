import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  award: String,
  discription: String,
  genre: [String],
  rating: Number,
  profilePage: String,
  coverPage: String,
});

const AwardWinning = mongoose.model("AwardWinning", postSchema);

export default AwardWinning;
