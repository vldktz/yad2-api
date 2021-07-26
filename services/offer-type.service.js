'use strict'
const {OfferType} = require('./../utils/sql/sql')

const getAllOfferTypes = async () => {
    return await OfferType.findAll();
}

module.exports = {getAllOfferTypes}
