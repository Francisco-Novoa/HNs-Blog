const logger = require('./logger')

const requestLogger = (request, response, next) => {
    //logs a few fields into the console
    logger.info('-----')
    logger.info('Method: ', request.method)
    logger.info('Path: ', request.path)
    logger.info('Body: ', request.body)
    logger.info('-----')
    next()
}

const errorHandler = (error, request, response) => {

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    logger.error(error.message)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

module.exports = {
    requestLogger,
    errorHandler,
    unknownEndpoint
}