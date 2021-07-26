'use strict'

const {Offer, OfferType} = require('./../utils/sql/sql')
const {ERRORS} = require('../utils/consts')

const createOffer = async (user) => {
    try {
        return await Offer.create(user);
    } catch (err) {
        throw ERRORS.badInputFormat;
    }
}


const getOffers = async ({offerType}) => {
    const searchQuery = {
        include: [
            {
                model: OfferType,
                as: 'OfferType',
            },
        ]
    };
    if (offerType)
        searchQuery.where = {
            offerType: offerType
        }

    return await Offer.findAll(searchQuery);
}

module.exports = {createOffer, getOffers}
