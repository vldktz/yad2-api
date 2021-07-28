'use strict'

/**
 *
 * APP config - can bew read from env or can be the defaults values
 */
module.exports = {
    app : {
        port : process.env.PORT || 3006,
        name : process.env.APP_NAME || 'yad2-API',
        jwt  : process.env.JWT_SECRET || 'top_secret_key',
        domain: process.env.DOMAIN || 'localhost',
        'api-domain': process.env.API_DOMAIN || 'localhost:3006',
        'app-domain': process.env.APP_DOMAIN || 'http://localhost:4200',
        cors : {
            whitelist : process.env.WHITE_LIST || 'http://localhost:4200',
        },
    },
    db : {
        username : process.env.DB_USERNAME || '',
        host : process.env.DB_HOST || '',
        password : process.env.DB_PASSWORD || '',
        name : process.env.DB_NAME || ''
    },
}

