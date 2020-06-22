'use strict'

//imports to set up the app

const { PORT } = require('./utils/config')

const express = require('express')

const cron = require('node-cron')

require('express-async-errors')

const path = require('path')

const app = express()

const cors = require('cors')

const autoLoader = require('./utils/getBlogs')

//here the controllers are imported

const blogRouter = require('./controllers/blogs')
const clientRouter = require('./controllers/client')

//utils are imported

const { error, info } = require('./utils/logger')

const { errorHandler, unknownEndpoint, requestLogger } = require('./utils/middleware')

require('./src/database')

//cron jobs 0 0-23 * * *
cron.schedule('0 0-23 * * *', () => {
    info('-----')
    info('running blog fetch')
    autoLoader().then((e) => {
        info(`${e.insertedCount === undefined ? 'no' : e.insertedCount} blogs were added to the DB`)
    }).catch(e => {
        error(`the following blogs added to DB ${e.insertedDocs}`,)
    })
})

//middlewares

app.use(cors())

app.use(express.json())

app.use(requestLogger)

//static files

const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build')

// Static files
app.use(express.static(CLIENT_BUILD_PATH))


//here go the controllers

app.use('/api/blogs', blogRouter)
app.use('/,', clientRouter)
//there went the controllers

app.use(unknownEndpoint)

app.use(errorHandler)

app.listen(PORT, function () {
    info(`Server Listening on ${PORT}`)
})








