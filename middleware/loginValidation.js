const passwordHash = require('../service/hash')
const getUserByUsername = require('../service/getUserByUsername')
module.exports = async (req, res, next) => {
  try {
    const user = await getUserByUsername(req.body.nickname)
    const hashedpassword = await passwordHash(req.body.password, user.salt)
    if (!user || user.password !== hashedpassword.hashed) {
      return res.status(401).send({ message: 'Wrong Nickname or password' })
    } else {
      req.user = user
      next()
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}
