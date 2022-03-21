const hash = require('../service/hash')

const { saveUser } = require('../service/dataBaseManagment')

module.exports = async (req, res) => {
  try {
    const { hashed: password, salt } = await hash(req.body.password)
    const userObj = { ...req.body, salt, password }
    const user = await saveUser(userObj)
    res.send(user)
  } catch (error) {
    return res.send(error)
  }
}
