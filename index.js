const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const db = require('./config/db');

const quizController = require('./controllers/QuizController');
const userController = require('./controllers/UserController');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
  var list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent list of items');
});

/* :
 **************************************************/
app.get('/api/quizzes/list', (req, res, next) =>
  quizController.list(req, res, next)
);

/* :
 **************************************************/
app.get('/api/quiz/:id', (req, res, next) =>
  quizController.read(req, res, next)
);

/* :
 **************************************************/
app.post('/api/user/login', (req, res, next) =>
  userController.login(req, res, next)
);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
