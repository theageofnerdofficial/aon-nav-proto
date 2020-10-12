// Imports:
const msg = require('../common/msg');

// Models:
const Quiz = require('../models/Quiz');
const User = require('../models/User');

exports.createAccessToken = (req, res) => {
  let newUser = new User(reqBodyCp);
  console.log(newUser);
  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

/* Delete favourites:
 ******************************************************************/
exports.quizzesDeleteFavs = (req, res) => {
  Quiz.updateMany({}, { $set: { favouritedBy: [] } }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};

exports.usersDeleteFavs = (req, res) => {
  User.updateMany({}, { $set: { favourites: [] } }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });

  exports.usersDeleteRatings = (req, res) => {
    User.updateMany(
      {},
      { $set: { dislikes: [], likes: [] } },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          console.log(result);
          res.send(result);
        }
      }
    );
  };
};
