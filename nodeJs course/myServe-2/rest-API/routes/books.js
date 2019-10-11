const express = require('express');
const router = express.Router();
const uuid = require('uuid/v1');

let books = [
  {
    id: 1,
    author: 'Jonh Doe',
    title: 'js Book'
  },
  {
    id: 2,
    author: 'Jonh Doe-2',
    title: 'js Book-2'
  },
];

router.get('/', (req, res, next) => {
  return res.json(books);
});

router.get('/:id', (req, res) => {
  const booksId = parseInt(req.params.id, 10);
  const book = books.find(books => books.id === booksId);

  if (book) {
    return res.json(book);
  }

  return res.status(404).json({
    status: `Book with bookId/${booksId} not found`
  });
});

router.post('/', (req, res) => {
  const book = {
    title: req.body.title || 'Default title',
    author: req.body.author || 'Default title',
    id: uuid()
  };
  books.push(book);
  return res.json(book);
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  books.forEach((book) => {
    if (book.id === bookId) {
      book.title = req.body.title || book.title;
      book.author = req.body.author || book.title;
    }
  });
  const newBook = books.find(book => book.id === bookId);
  return res.json(newBook);
});

router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  books = books.filter(book => book.id !== bookId);

  const existBook = books.find(book => book.id === bookId);

  if (!existBook) {
    return res.send(`Book with ${bookId} was deleted`);
  } else {
    return res.send('Something wrong').status(400);
  }
});

/*router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);

  const book = books.find(books => books.id === bookId);

  if (book) {
    return res.send(book);
  }
  /!*books = books.filter(book => book.id !== bookId);*!/
  const newBooks = books.reduce((acc, item) => {
      if(item.id !== bookId) {
        acc.push(item);
      }
    return acc;
  }, []);
  books = newBooks;
  return res.json(newBooks);
});*/

module.exports = router;
