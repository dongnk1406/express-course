const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SitesController');

router.use('/search', siteController.search);
router.use('/', siteController.home); // route default always at below

module.exports = router;
