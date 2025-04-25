const express = require("express");
const BookModel = require("../models/book.model");
const { authToken, checkRole } = require("../middleware/auth.middleware");

const BookRouter = express.Router();

// ✅ Add a new book
BookRouter.post("/", authToken, checkRole("librarian"), async (req, res) => {
  try {
    const book = new BookModel(req.body);
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (err) {
    res.status(500).json({ message: "Error adding book", error: err.message });
  }
});

// ✅ Update a book
BookRouter.put("/:bookId", authToken, checkRole("librarian"), async (req, res) => {
  try {
    const { bookId } = req.params;
    const updated = await BookModel.findByIdAndUpdate(bookId, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book updated successfully", book: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating book", error: err.message });
  }
});

// ✅ Delete a book
BookRouter.delete("/:bookId", authToken, checkRole("librarian"), async (req, res) => {
  try {
    const { bookId } = req.params;
    const deleted = await BookModel.findByIdAndDelete(bookId);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book", error: err.message });
  }
});

// ✅ Get all books (with optional query)
BookRouter.get("/", authToken, async (req, res) => {
  try {
    const searchParams = req.query;
    const books = await BookModel.find(searchParams);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books", error: err.message });
  }
});

// ✅ Get borrowed books (for the current user)
BookRouter.get("/borrowed", authToken, async (req, res) => {
  try {
    const books = await BookModel.find({ borrowedBy: req.userId });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching borrowed books", error: err.message });
  }
});

// ✅ Borrow a book
BookRouter.post("/:bookId/borrow", authToken, async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await BookModel.findById(bookId);

    if (!book) return res.status(404).json({ message: "Book not found" });
    if (!book.available) return res.status(400).json({ message: "Book already borrowed" });

    book.available = false;
    book.borrowedBy = req.userId;
    book.borrowedAt = new Date();
    await book.save();

    res.status(200).json({ message: "Book borrowed successfully", book });
  } catch (err) {
    res.status(500).json({ message: "Error borrowing book", error: err.message });
  }
});

// ✅ Return a book
BookRouter.post("/:bookId/return", authToken, async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await BookModel.findById(bookId);

    if (!book || book.borrowedBy?.toString() !== req.userId) {
      return res.status(403).json({ message: "You have not borrowed this book" });
    }

    book.available = true;
    book.borrowedBy = null;
    book.borrowedAt = null;
    await book.save();

    res.status(200).json({ message: "Book returned successfully", book });
  } catch (err) {
    res.status(500).json({ message: "Error returning book", error: err.message });
  }
});

module.exports = BookRouter;
