const keys = require("../config/passportKeys");
const jwt = require("jsonwebtoken");
const DB = require("../models");

exports.AuthTokenVerify = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ message: 'Access token is required.', status: 0 }); // if there isn't any token
  }
  jwt.verify(token, keys.secretOrKey, async (err, user) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    const userDetails = await DB.customer.findOne({ where: { id: user.id } });
    if (!userDetails) {
      return res.status(400).send({ message: 'User not found.', status: 0 });
    }
    req.user = user;
    next();
  })
}
