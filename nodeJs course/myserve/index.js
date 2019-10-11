const express = require('express');

const booksRouter = express.Router();

const app = express();

app.use((req, res, next) => {
  console.log("Date", new Date(), 'Method', req.method, 'URL', req.originalUrl, 'IP', req.ip);
  next();
});

app.use('/static', express.static(__dirname + '/public'));

const products = ['apple', 'pen', 'computer'];

app.get('/', (req, res, next) => {
  res.send('its working');
});

app.get('/products', (req, res, next) => {
  //res.json({products});
  next();
});

app.get('/products/:id', (req, res, next) => {
  req.params.id;
  res.send(products[req.params.id])
});

app.get('/blog', (req, res, next) => {
  res.redirect('/');
});

/*app.get('/products/:id', (req, res, next) => {
  if (products[req.params.id]) {
    const product = products[req.params.id];
    res.json({product});
  } else {
    res.status(403).send('Product not found');
  }
});*/

app.get('/downloadBooks', (req, res, next) => {
  res.download('./public/books.html', 'anotherName', (err) => {
    console.log('File sent');
  });
});

app.get('/products', (req, res, next) => {
  res.send(1);
});

booksRouter.get('/', (req, res,) => {
  res.send('Books')
});

booksRouter.get('/about', (req, res) => {
  res.send('About books');
});

app.use('/books', booksRouter);

app.use((err, req,res,next) => {
  console.log(err.stack);
  res.status(500).send(err.stack);
});
app.listen(5000, () => {
  console.log('started', new Date())
});
