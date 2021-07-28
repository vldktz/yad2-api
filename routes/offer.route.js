'use strict'

const router = require('express').Router();
const {createNewOffer,getAllOffers} = require('./../controllers/offer.controller')
const {verifyTokenMiddleware} = require('./../middlewares/validation.middleware');

/**
 * route for creating new offer
 */
router.post('/',verifyTokenMiddleware,createNewOffer);

/**
 * route for getting all the offers
 */
router.get('/',verifyTokenMiddleware,getAllOffers);

module.exports = router;
