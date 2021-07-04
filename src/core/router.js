const path = require('path')

const cors = require('cors')
const express = require('express')
const inject = require('require-all')
const morgan = require('morgan')

const errorsHandler = require('../middlewares/errorsHandler')

const BASE_PATH = '/api'

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
}

const createRoutes = (app) => {
  app.use(express.json())
  app.use(cors(corsOptions))
  app.use(morgan('dev'))
  // app.use(compression())

  app.disable('x-powered-by')

  const router = express.Router
  const controllers = inject(path.resolve(__dirname, '../controllers'))

  try {
		const routes = inject(path.resolve(__dirname, '../routes'))

		for (const name in routes) {
			app.use(`${BASE_PATH}/${name}`, routes[name](router, controllers[name]))
		}

	} catch (error) {
		console.error(error)
	}

  app.use(errorsHandler)
}

module.exports = createRoutes
