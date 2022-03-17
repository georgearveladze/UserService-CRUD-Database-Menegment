const User = require('../models/User')

module.exports = async (req, res) => {
  try {
    const page = parseInt(req.query.skip)
    const limit = parseInt(req.query.limit)
    const skipIndex = (page - 1) * limit
    const list = await User.find({ deleted: false })
      .limit(limit)
      .skip(skipIndex)
      .exec()
    return res.status(200).json({
      message: "User's list",
      data: list,
    })
  } catch (e) {
    res.status(500).send({ message: 'Error Occured' })
  }
}
