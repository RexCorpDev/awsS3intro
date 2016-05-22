'use strict';

let express = require('express');
let router = express.Router();

router.use('/s3', require('./s3'));
router.use('/ddg', require('./ddg'));

module.exports = router;
