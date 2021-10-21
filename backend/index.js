import express from "express";
import cors from "cors";
import StoriesRoutes from "./routes/stories.js";

var app = express();
var PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", StoriesRoutes);

app.listen(PORT, console.log(`Server is running on: localhost://${PORT}`));
