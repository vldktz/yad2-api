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


const getOffers = async ({offerTypeID}) => {
    const searchQuery = {
        include: [
            {
                model: OfferType,
                as: 'OfferType',
            },
        ]
    };
    if (offerTypeID)
        searchQuery.where = {
            offerTypeID
        }

    return await Offer.findAll(searchQuery);
}

module.exports = {createOffer, getOffers}
