const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SitesController');

router.get('/search', siteController.search);
router.get('/', siteController.home); // route default always at below

module.exports = router;
