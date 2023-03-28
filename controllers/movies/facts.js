import mongoose from "mongoose";
import Facts from "../../model/movies/facts.js"


export const getFacts = async (req, res) => {
  try {
    const movie = await Facts.find();
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// posting a new movie
export const postFacts = async (req, res) => {
  const { title, fact, profilePage, date } = req.body;

  const newMovie = new Facts({
    title,
    fact,
    profilePage,
    date
  });

  try {
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// updated post

export const updateFacts = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedmovie = await Facts.findByIdAndUpdate(_id, movie, {
    new: true,
  });
  res.json(updatedmovie);
};

// delete movie

export const deleteFacts = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${id}`);

  await Facts.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully." });
};
