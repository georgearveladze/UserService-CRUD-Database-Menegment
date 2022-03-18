const hash = require('../service/hash')
const { findUserAndUpdate } = require('../service/dataBaseManagment')

const updater = async (req, res) => {
  try {
    if (req.body.password) {
      const { passwordHash, salt } = await hash(req.body.password)
    }
    const data = { ...req.body, passwordHash, salt }
    const user = await findUserAndUpdate(req.user.id, data)(
      { username: updatedUserUsername },
      data
    )
    res.status(200).send({
      message: 'User is Updated!',
    })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}
module.exports = updater
