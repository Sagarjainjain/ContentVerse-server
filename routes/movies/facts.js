import express from "express";
import {
 getFacts,
 postFacts,
 deleteFacts,
 updateFacts

} from "../../controllers/movies/facts.js";


const router = express.Router();

router.get("/",  getFacts);
router.post("/",  postFacts);
router.patch("/:id",  updateFacts);
router.delete("/:id",  deleteFacts);

export default router;
