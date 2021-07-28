'use strict'

const router = require('express').Router();
const {getOfferTypes} = require('./../controllers/offer-type.controller')

/**
 * route for getting all the offer types
 */
router.get('/',getOfferTypes);

module.exports = router;
