import Express, { json } from "express";
import { PORT, DB_URL } from "./config.js";
import Mongoose from "mongoose";
import router from "./routes/BookRoutes.js";

const app = Express();
app.use(Express.json());

Mongoose.connect(DB_URL)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/book', router)