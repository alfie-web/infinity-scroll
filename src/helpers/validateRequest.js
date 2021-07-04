const { validationResult } = require('express-validator')
const createError = require('http-errors')

module.exports = (req, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() })
    return next(createError(400, 'Не корректные данные', { errors: errors.array() }))
  }
}
