'use strict'

const {responseHandler,errorHandler,returnResponse} = require('../utils/response');
const {offerCreateValidator} = require('./../utils/input-validation');
const {ERRORS} = require('../utils/consts');
const {createOffer,getOffers} = require('./../services/offer.service');

/**
 * handler for creating a new offer
 * @param body
 * @param res
 * @returns {Promise<*>}
 */
const createNewOffer = async ({body} , res) => {
    const newOffer = body;
    console.log(newOffer);
    const valid = offerCreateValidator.validate(newOffer);
    console.log(valid.error);
    if (valid.error)
        return (errorHandler(ERRORS.badInputFormat,res))
    try {
        const offer = await createOffer(newOffer);
        console.info({OfferID : offer.id, title : offer.title},'offer create success');
        return responseHandler(returnResponse(0,'','create success'),res)
    }
    catch (err)  {
        console.info('failed to create new offer', err.message);
        return (errorHandler(err,res))
    }
}

/**
 * handler for fetching offers
 * @param query
 * @param res
 * @returns {Promise<*>}
 */
const getAllOffers = async ({query}, res) => {
    try {
        const offers = await getOffers(query);
        return responseHandler(offers,res);
    }
    catch (err) {
        console.error({err},"Failed to get offers");
        return (errorHandler(err,res))
    }
}

module.exports = {createNewOffer,getAllOffers}
