'use strict'

const { Sequelize} = require('sequelize');
const dbConfig = require('../config').db;

/**
 * Sequelize connection object creation
 * @type {Sequelize}
 */
const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
        handleDisconnects: true
    },
});

/**
 * Sequelize connection init function
 * @returns {Promise<void>}
 */
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.info('Database connection initialized');
        await sequelize.sync();
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

/**
 * Sequelize models
 */
const User = require("./models/user.model")(sequelize, Sequelize);
const Offer = require("./models/offer.model")(sequelize, Sequelize);
const OfferType = require("./models/offer-type.model")(sequelize, Sequelize);


/**
 * Sequelize relations config
 */
User.hasMany(Offer,{as: 'userOffers',foreignKey: 'userID'});
Offer.belongsTo(User,{foreignKey: 'userID'});

OfferType.hasMany(Offer,{as: 'offerTypeOffers',foreignKey: 'offerType'})
Offer.belongsTo(OfferType, {foreignKey: 'offerType'});

module.exports = {connect,User,Offer,OfferType};
