const { validationResult } = require('express-validator')

module.exports = (req) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return { errors: errors.array() }
  }
}
