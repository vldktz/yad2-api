'use strict'
const {getAllOfferTypes} = require('./../services/offer-type.service');
const {responseHandler,errorHandler} = require('../utils/response');

/**
 * handler for fetching all the offer types
 * @param res
 * @returns {Promise<*>}
 */
const getOfferTypes = async ({},res) => {
    try {
        const offerTypes = await getAllOfferTypes();
        return responseHandler(offerTypes,res);

    }
    catch (err) {
        console.info('failed to fetch offer types', err.message);
        return (errorHandler(err,res))
    }
}

module.exports = {getOfferTypes};
