const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const errorsHandler = require('../middlewares/errorsHandler')

const articlesRoutes = require('./article')

const BASE_PATH = '/api'

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
}

const createRoutes = (app) => {
  app.use(express.json())
  app.use(cors(corsOptions))
  app.use(morgan('dev'))
  // app.use(cors({ origin: '*' }))

  app.use(`${BASE_PATH}/articles`, articlesRoutes)

  app.use(errorsHandler)
}

module.exports = createRoutes
