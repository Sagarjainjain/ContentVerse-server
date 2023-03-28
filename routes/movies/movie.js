import express from "express";
import { getMovies, postMovie, updateMovie, deleteMovie, getMovie } from "../../controllers/movies/movies.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);
router.post("/",  postMovie);
router.patch("/:id",  updateMovie  )
router.delete("/:id",  deleteMovie  )

export default router;
