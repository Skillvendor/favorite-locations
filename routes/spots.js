const express = require('express');
const router = express.Router();

const spotsController = require('../controllers/spots');

router.get('/spots', spotsController.index)

module.exports = router
