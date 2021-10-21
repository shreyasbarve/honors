import express from "express";
import StoryModel from "../models/story.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const stories = await StoryModel.find();
    res.json(stories);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/", async (req, res) => {
  var data = req.body;
  const newStory = new StoryModel({
    name: data.name,
    date: data.date,
    isrc: data.isrc,
    content: data.content,
  });
  try {
    const s = newStory.save();
    res.send(s);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/details", async (req, res) => {
  const _id = req.query.uid;
  try {
    const story = await StoryModel.findById(_id);
    res.json(story);
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/", async (req, res) => {
  const _id = req.query.uid;
  try {
    const story = await StoryModel.findByIdAndRemove(_id);
    res.json(story);
  } catch (error) {
    res.send(error.message);
  }
});

router.patch("/", async (req, res) => {
  const _id = req.query.uid;
  var newStory = req.body;
  try {
    const updatedStory = await StoryModel.findByIdAndUpdate(
      _id,
      { ...newStory, _id },
      { new: true }
    );
    res.json(updatedStory);
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
