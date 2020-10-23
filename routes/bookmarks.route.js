const express = require("express");
const router = express.Router();
const Bookmark = require("../models/booksmark.model");
const Tag = require("../models/tag.model");

router.post("/", async (req, res) => {
  try {
    const { link, title, publisher, tagId } = req.body;

    if (!link) throw new Error("link is required");
    if (!title) throw new Error("title is required");
    var tempTagId;
    if (!tagId) tempTagId = null;
    else {
      const tagExists = await Tag.find({ _id: tagId });
      console.log("tagExists", tagExists);

      if (!tagExists) throw new Error("Tag does not exist!");
    }
    let titleLowercase = title.toLowerCase();

    const bookmarkItem = await new Bookmark({
      link,
      title: titleLowercase,
      publisher,
      tagId: tempTagId,
    });
    const newBookmarkItem = await bookmarkItem.save();
    return res.status(200).json(newBookmarkItem);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookmarkList = await Bookmark.find();

    return res.status(200).json(bookmarkList);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.put("/addtag", async (req, res) => {
  try {
    const { bookmarkId, tagId } = req.body;
    if (!bookmarkId) throw new Error("bookmarkId is required!");
    if (!tagId) throw new Error("tagId is required!");

    const tagExists = await Tag.findById({ _id: tagId });
    console.log("tagExists", tagExists);

    if (!tagExists) throw new Error("Tag does not exist!");

    const updateBookmark = await Bookmark.findByIdAndUpdate({
      _id: bookmarkId,
      tagId,
      updatedAt: Math.floor(new Date().getTime() / 1000),
    });
    return res.status(200).json(updateBookmark);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.put("/removetag/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeTagFromBookmark = await Bookmark.findOneAndUpdate({
      _id: id,
      tagId: null,
      updatedAt: Math.floor(new Date().getTime() / 1000),
    });
    return res.status(200).json(removeTagFromBookmark);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBookmarkEntity = await Bookmark.findOneAndDelete({ _id: id });
    return res
      .status(200)
      .json(deleteBookmarkEntity || "Entry does not exist!");
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = router;
