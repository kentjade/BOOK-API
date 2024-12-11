const books = require("../models/booksModel");

const getAllBooks = (_req, res) => {
  res.json(books);
};

const getBooksByGenre = (req, res) => {
  const genre = req.params.genre.toLowerCase();
  const filteredBooks = books.filter((book) => book.genre.toLowerCase() === genre);  

  if(filteredBooks.length === 0) {
    return res.status(404).json({ error: "No book for this genre"});
  }

  res.json(filteredBooks);
};

module.exports = {
  getAllBooks,
  getBooksByGenre,
};