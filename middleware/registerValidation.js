const { validationResult } = require('express-validator')

const deleteValidations = async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0].msg,
      })
    }
    next()
  } catch (error) {
    return res.status(400).json({ errors })
  }
}

module.exports = deleteValidations
