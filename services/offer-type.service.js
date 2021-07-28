'use strict'
const {OfferType} = require('./../utils/sql/sql')

/**
 * get all offer types from DB
 * @returns {Promise<OfferType[]>}
 */
const getAllOfferTypes = async () => {
    return await OfferType.findAll();
}

module.exports = {getAllOfferTypes}
