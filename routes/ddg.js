'use strict';

let express = require('express');
let router = express.Router();
let ddg = require('ddg');

router.route('/')
.post((req, res) => {
  console.log('FE req.body: ', req.body);
  if(!req.body.search) return res.status(400).send({ERROR : 'You did not provide search term'});
  let ddgOptions = {
    // "useragent"       :   "chHack app",
    "format"          :   "json",
    "no_redicrects"   :   "1",
    "no_html"         :   "0"
  };
  ddg.query(req.body.search, ddgOptions, (err, data) => {
    res.status(err ? 400: 200).send({DATA: data});
  });
});



// DUCK DUCK GO
// let ddgOptions = {
//   "useragent"       :   "chHack app",
//   "format"          :   "json",
//   "no_redicrects"   :   "1",
//   "no_html"         :   "0"
// };
// ddg.query('javascript', ddgOptions, (err, data) => {
//   console.log('DDG data', data);
//
// });


module.exports = router;
