// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).send('Token is required');

  try {
    const decoded = jwt.verify(token, process.env.secret);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).send('Invalid Token');
  }
};
