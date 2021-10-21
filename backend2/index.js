import express from "express";
import cors from "cors";
import StoriesRoutes from "./routes/stories.js";
import mongoose from "mongoose";

var app = express();
const PORT = 5000 || process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb://127.0.0.1:27017/stories";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once("open", () =>
  console.log("MongoDB connection successfully extablished")
);

mongoose.set("useFindAndModify", false);

app.use("/", StoriesRoutes);

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
