const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// API Router for version 1
// -----------------------

const bootcampController = require('.bootcamp/index.js');
router.use('/bootcamp', bootcampController);

module.exports = router;
