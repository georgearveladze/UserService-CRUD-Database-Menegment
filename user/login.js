const hash = require('../service/hash')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  try {
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '24h',
      }
    )
    console.log(accessToken)
    const { password, ...others } = user._doc
    res.status(200).json({
      data: others,
      accessToken: accessToken,
    })
  } catch (err) {
    return res.status(500).json('unauthorized')
  }
}
