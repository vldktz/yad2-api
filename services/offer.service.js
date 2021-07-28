'use strict'

const {Offer, OfferType, User} = require('./../utils/sql/sql')
const {ERRORS} = require('../utils/consts')

const createOffer = async (offer) => {
    try {
        return await Offer.create(offer);
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
            {
                model: User,
                as: 'User'
            }
        ]
    };
    if (offerTypeID)
        searchQuery.where = {
            offerTypeID
        }

    return await Offer.findAll(searchQuery);
}

module.exports = {createOffer, getOffers}
