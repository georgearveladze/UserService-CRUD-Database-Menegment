const getActiveUser = require('../service/dataBaseManagment')

module.exports = async (req, res) => {
  try {
    const UserDelete = await getActiveUser(false)
    return res.status(200).json({
      message: 'User is deleted',
    })
  } catch (err) {
    return res.status(400).render('error', { error: err })
  }
}
