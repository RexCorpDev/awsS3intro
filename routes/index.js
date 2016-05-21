'use strict';

let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/', (req, res, next) => {
  let indexPath = path.join(__dirname, '../views/index.html');
  res.sendFile(indexPath);
});

module.exports = router;
