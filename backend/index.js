import Express from "express";
import { PORT, DB_URL } from "./config.js";
import Mongoose from "mongoose";

const app = Express();
app.get("/", (req, res) => {
  res.status(420).send("Hello from express.js");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`);
});

Mongoose.connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.log(error);
  });
