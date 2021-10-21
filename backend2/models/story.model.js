import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  isrc: { type: String, required: true },
  content: { type: String, required: true },
});

export default mongoose.model("Story", storySchema);
