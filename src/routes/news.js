const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index); // route default always at below

module.exports = router;
