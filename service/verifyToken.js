const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken === undefined) {
      return res.status(400).send({
        message: 'Please give accessToken',
      });
    }
    const token = bearerToken.split(' ')[1];
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    const { isAdmin } = decoded;
    if (isAdmin == false) {
      return res.status(400).send({
        message: 'update should by only admin',
      });
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      message: err.message,
    });
  }
};
