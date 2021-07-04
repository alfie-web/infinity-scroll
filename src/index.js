const express = require('express')

require('dotenv').config()

const PORT = process.env.PORT || 8888

const app = express()

require('./core/router')(app)
require('./core/db')()

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
