'use strict'

const router = require('express').Router();
const {getOfferTypes} = require('./../controllers/offer-type.controller')

router.get('/',getOfferTypes);

module.exports = router;
