const express = require("express");
const router = express.Router();
const Bookmark = require("../models/booksmark.model");
const Tag = require("../models/tag.model");

router.post("/", async (req, res) => {
  try {
    let { title } = req.body;
    if (!title) throw new Error("title is required");
    title = title.toLowerCase();
    const tagItem = await new Tag({
      title,
    });

    const newtagItem = await tagItem.save();
    return res.status(200).json(newtagItem);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tagsList = await Tag.find();

    return res.status(200).json(tagsList);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTagEntity = await Tag.findOneAndDelete({ _id: id });
    return res.status(200).json(deleteTagEntity || "Tag does not exist!");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
