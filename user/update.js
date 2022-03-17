const hash = require('../routes/hush');
const User = require('../models/User');
const { response } = require('express');

const updater = async (req, res) => {
  try {
    const data = {};
    if (req.body.password) {
      const { passwordHash, salt } = await hash(req.body.password);
      data.password = passwordHash;
      data.salt = salt;
    }
    data.firstname = req.body.firstname;
    data.lastname = req.body.lastname;
    data.username = req.body.username;
    const updatedUserUsername = req.updatedUserUsername;
    const user = await User.findOneAndUpdate(
      { username: updatedUserUsername },
      data
    );
    res.status(200).send({
      message: 'User is Updated!',
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = updater;
