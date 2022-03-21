const { getUserByUsername } = require('../service/dataBaseManagment')
const user = require('../models/User')

const LoginCheck = async (req, res, next) => {
  try {
    const { hashed } = await hash(req.body.password, user.salt)
    if (user.password !== hashed) {
      res.status(401).send({ err: "'Wrong credentials!'" })

      const user = await getUserByUsername(req.body.username)
      if (!user) return res.status(401).send({ err: "'Wrong credentials!'" })

      next()
    }
  } catch (err) {
    return res.status(401).send({ message: 'Unautorized' })
  }
}

module.exports = LoginCheck
