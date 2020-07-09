// Imports:
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = process.env;

function verifyToken(req, res, next) {
  console.log('Verifying token');
  const token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, TOKEN_KEY, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    // If everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
