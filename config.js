const dotenv = require('dotenv').config();
module.exports = {
    name: 'API',
    version: '1',
    env: process.env.NODE_ENV || 'development',
    adminer: {
        port: process.env.SERVER_PORT || 8080,
        base_url: process.env.BASE_URL || 'http://localhost:8080',
    },
    db: {
        uri: `${process.env.MONGODB_URI}:${process.env.DB_PORT}/${process.env.DB_NAME}` || 'mongodb://localhost:27017/rbac_nodejs_mongo',
    },
};