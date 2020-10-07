// Imports:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const msg = require('../common/msg');
const settings = require('../config/settings');

// Model(s):
const User = require('../models/User');

/* Authenticate user:
 ******************************************************************/
exports.authenticate = (req, res) => {
  User.findById(req.userId, { password: 0 }, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    res.status(200).send(user);
  });
};

/* Create user:
 ******************************************************************/
exports.create = (req, res) => {
  console.log('controller');
  const reqBodyCp = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(reqBodyCp.password, salt);
  reqBodyCp.password = hash;
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

/* Delete user (admins only):
 ******************************************************************/
exports.delete = (req, res) => {
  User.deleteOne({ _id: req.body.userId }, (err, user) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: msg.success.deleted('user') });
  });
};

/* Demote user:
 ******************************************************************/
exports.demote = (req, res) => {
  const { userId } = req.body;
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    user.accessLevel = user.accessLevel > 1 ? user.accessLevel - 1 : 1;
    user.save((err, user) => {
      res.status(200).send(user);
    });
  });
};

/* Find user by ID:
 ******************************************************************/
exports.findById = (req, res) => {
  User.findById(
    req.params.id,
    {
      username: 1,
      location: 1,
      friends: 1,
      accessLevel: 1,
      createdOn: 1,
      favourites: 1,
      quizResults: 1,
      submissions: 1,
    },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    }
  );
};

/* Increment points of user upon finishing quiz:
 ******************************************************************/
exports.incPoints = (req, res) => {
  const { quizId, points } = req.body;
  User.findById(req.userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    user.quizResults.push([quizId, points]);
    user.save((err, user) => {
      res.status(200).send(user);
    });
  });
};

/* List users:
 ******************************************************************/
exports.list = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

/* List users:
 ******************************************************************/
exports.listSecure = (req, res) => {
  User.find({}, { email: 1, username: 1 }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

/* Login user:
 ******************************************************************/
exports.login = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    const token = jwt.sign({ id: user._id }, settings.token.key, {
      expiresIn: settings.token.expiresIn,
    });
    res.status(200).send({
      auth: true,
      id: user._id,
      username: req.body.username,
      token: token,
    });
  });
};

/* Promote user:
 ******************************************************************/
exports.promote = (req, res) => {
  const { userId } = req.body;
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    user.accessLevel = user.accessLevel < 2 ? user.accessLevel + 1 : 2;
    user.save((err, user) => {
      res.status(200).send(user);
    });
  });
};

/* Submit rating to user (so you can't rate same quiz twice):
 ******************************************************************/
exports.rate = (req, res) => {
  User.findById(req.body.userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    const isRatingLike = req.body.vote.upvote >= 1 ? true : false;
    // If rating is a like and it's not already included, add/push it:
    if (isRatingLike && !user.likes.includes(req.body.quizId)) {
      user.likes.push(req.body.quizId);
      user.dislikes = user.dislikes.filter(
        (dislike) => dislike !== req.body.quizId
      );

      // If rating is not a like (i.e. a dislike) and it's not already included, add/push it:
    } else if (!isRatingLike && !user.dislikes.includes(req.body.quizId)) {
      user.dislikes.push(req.body.quizId);
      user.likes = user.likes.filter((like) => like !== req.body.quizId);
    }
    user.save((err, user) => {
      res.status(200).send(user);
    });
  });
};

/* Toggle user ban:
 ******************************************************************/
exports.toggleBan = (req, res) => {
  const { userId } = req.body;
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    user.accessLevel = user.accessLevel > 0 ? 0 : 1;
    user.save((err, user) => {
      res.status(200).send(user);
    });
  });
};

/* Toggle quiz favourite of user:
 ******************************************************************/
exports.toggleFavourite = (req, res) => {
  const { title, id, thumbnailSrc } = req.body;
  User.findById(req.userId, (err, user) => {
    if (err) return res.status(500).send(msg.err.findErr('user'));
    if (!user) return res.status(404).send(msg.err.noFoundErr('user'));
    let userFavsCp = user.favourites;
    let hasFav = false;
    let favIndex = Number();
    // Empty favs array? Add to favs.
    // If not, check if already faved — if is, remove, if isn't add:
    if (user.favourites.length === 0) {
      userFavsCp.push({ title, id, thumbnailSrc });
    } else {
      for (let i = 0; i < user.favourites.length; i++) {
        if (user.favourites[i].id === id) {
          hasFav = true;
          favIndex = i;
        }
      }
      if (hasFav) {
        userFavsCp.splice(favIndex, 1);
      } else {
        userFavsCp.push({ title, id, thumbnailSrc });
      }
    }
    user.favourites = userFavsCp;
    user.save((err, user) => {
      if (err) console.log(err);
      res.status(200).send(user);
    });
  });
};

/* Read/get a user:
 ******************************************************************/
exports.read = (req, res) => {
  req.body.userid;
  //bcrypt.compare("B4c0/\/", hash, (err, res) => res === true)
  User.findById(req.params.userid, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

/* Update user:
 ******************************************************************/
exports.update = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.userid },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    }
  );
};
