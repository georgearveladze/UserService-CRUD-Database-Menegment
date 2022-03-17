const User = require('../models/User');

module.exports = async (req, res) => {
  try {
    const filter = { username: req.updatedUserUsername };
    const deletedUser = await Users.delete(filter).catch((err) => {
      return res.status(500).render('error', { error: err });
    });
    return res.status(200).json({
      message: 'User is deleted',
    });
  } catch (err) {
    res.status(400).render('error', { error: err });
  }
};
