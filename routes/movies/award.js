import express from "express";
import {
getAwardMovies,
getAwardMovie,
postAwardMovies,
updateAwardMovies,
deleteAwardMovies
} from "../../controllers/movies/award.js";


const router = express.Router();

router.get("/",  getAwardMovies);
router.get("/:id",  getAwardMovie);
router.post("/",  postAwardMovies);
router.patch("/:id",  updateAwardMovies);
router.delete("/:id",  deleteAwardMovies);

export default router;
