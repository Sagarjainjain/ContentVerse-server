import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import talent from "./routes/movies/talent.js"
import performamnce from "./routes/movies/performance.js"
import movierouter from "./routes/movies/movie.js";
import awardrouter from "./routes/movies/award.js";
import factsrouter from "./routes/movies/facts.js";
import userrouter from "./routes/user/user.js"
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());



app.use('/user', userrouter)
app.use("/talent", talent);
app.use("/performance", performamnce);
app.use("/award", awardrouter);
app.use("/fact", factsrouter);
app.use("/movie", movierouter);
app.use("/", (req, res) => {
  res.send("app running")
})

const PORT = process.env.PORT;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`app running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
