'use strict'

const router = require('express').Router();
const {createNewOffer,getAllOffers} = require('./../controllers/offer.controller')
const {verifyTokenMiddleware} = require('./../middlewares/validation.middleware');

router.post('/',verifyTokenMiddleware,createNewOffer);

router.get('/',verifyTokenMiddleware,getAllOffers);

exports = router;
