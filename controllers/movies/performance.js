import mongoose from "mongoose";
import Movies from "../../model/movies/performance.js";

export const getMovies = async (req, res) => {
  try {
    const movie = await Movies.find();
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movies.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// posting a new movie
export const postMovie = async (req, res) => {
  const { customId, title, discription, genre, rating, profilePage, coverPage } =
    req.body;

  const newMovie = new Movies({
    customId,
    title,
    discription,
    genre,
    rating,
    profilePage,
    coverPage,
  });

  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// updated post

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedmovie = await Movies.findByIdAndUpdate(_id, movie, {
    new: true,
  });
  res.json(updatedmovie);
};

// delete movie

export const deleteMovie = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

  await Movies.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully." });
};
