const mongoose = require('mongoose')
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = require('../utils/config')
const { info } = require('../utils/logger')

// mongoose options
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: false,
    poolSize: 10,
    bufferMaxEntries: 0
}

// mongodb environment variables

const dbConnectionURL = {
    'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
}

mongoose.connect(dbConnectionURL.LOCALURL, options)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL))
db.once('open', () => {
    // we're connected !
    info('Mongodb Connection Successful')
})
