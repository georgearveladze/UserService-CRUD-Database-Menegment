const { getUserByUsername } = require('../service/dataBaseManagment')

const LoginCheck = async (req, res, next) => {
  try {
    const user = await getUserByUsername(req.body.username)

    if (!user) return res.status(401).send({ err: "'Wrong credentials!'" })

    next()
  } catch (err) {
    return res.status(401).send({ message: 'Unautorized' })
  }
}

module.exports = LoginCheck
