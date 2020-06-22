require('dotenv').config()
const {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT,
    TARGET,
    PORT
} = process.env



module.exports = {
    MONGO_HOSTNAME,
    MONGO_DB,
    MONGO_PORT,
    TARGET,
    PORT
}
