const errorHandler = (error, req, res, next) => {
  if (!error) return next()

  console.log('Error status: ', error.status)
  console.log('Message: ', error.message)

  res.status(error.status || 500).json({
    status: error.status || 500,
    message: error.message,
    ...error,
  })

  next()
}

module.exports = errorHandler
