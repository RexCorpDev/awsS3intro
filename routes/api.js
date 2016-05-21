'use strict';

let express = require('express');
let router = express.Router();

router.use('/images', require('./images'));

module.exports = router;
