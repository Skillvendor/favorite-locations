const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countries');

router.get('/spots/countries', countriesController.index)

module.exports = router
