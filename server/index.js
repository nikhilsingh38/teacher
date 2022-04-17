import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://nikhil:nikhil_123@cluster0.58hrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port 5000"))
  )
  .catch((error) => console.log(error.message));


