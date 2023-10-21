import Express from "express";
import { Book } from "../view/BookModel.js";

const router = Express.Router();

//test route
router.get("/test", async (req, res) => {
  try {
    res.status(420).send({ message: "server is connected on /test" });
  } catch (error) {
    console.log(error.message);
  }
});

//book creation route
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(403).send({ message: "Send all required data" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    await Book.create(newBook);
    return res.status(201).send({ message: "book created!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// read all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(420).json(books);
  } catch (error) {
    console.log(error.message);
  }
});

// find book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
});

//update book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({ message: "send all the required fields." });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "book not found" });
    }
    return res.status(200).json({ message: "book updated sucessfully" });
  } catch (error) {
    console.log(error.message);
  }
});

// delete book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "book not found" });
    }
    return res.status(200).send({ message: "book deleted" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

export default router;