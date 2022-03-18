const hash = require('../service/hash')
const { validationResult } = require('express-validator')
const { saveUser } = require('../service/dataBaseManagment')

module.exports = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0].msg,
      })
    }
    const { hashed: password, salt } = await hash(req.body.password)
    const userObj = { ...req.body, salt, password }
    const user = await saveUser(userObj)
    res.send(user)
  } catch (error) {
    return res.send(error)
  }
}
