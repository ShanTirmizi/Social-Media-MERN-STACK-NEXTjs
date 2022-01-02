const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Importing routes
const postRoute = require('./routes/post');

// Middleware

app.use('/posts', postRoute);

// app.use('/posts', () => {
//   console.log('Request to /posts');
// });

//Routes
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/posts', (req, res) => {
//   res.send('Posts');
// });

// connect Db
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('Connected to database');
});

// Listing to the server
app.listen(8000, () => console.log('Server started at port 8000'));
