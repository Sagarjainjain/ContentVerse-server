import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  discription: String,
  genre: [String],
  rating: Number,
  profilePage: String,
  coverPage: String
});

const Movies = mongoose.model("movies", postSchema);

export default Movies;