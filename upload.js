'use strict';

let fs = require('fs');
let path = require('path');
let uuid = require('uuid');
let AWS = require('aws-sdk');
let s3 = new AWS.S3();

let bucketName = 'toby-s3-test';
let urlBase = 'https://s3.amazonaws.com/'
let fileName = 'zoolander.jpg';


fs.readFile(path.join(__dirname, fileName), (err, data) => {
  if(err) throw err;
  console.log('fs err: ', err);
  console.log('fs data: ', data);

  let ext = fileName.split('.').pop();
  let key = uuid() + `.${ext}`;

  let params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: data
  };

  s3.putObject(params, (err, result) => {

    let imgUrl = `${urlBase}${bucketName}/${key}`
    console.log('aws imgUrl: ', imgUrl);
    console.log('aws err: ', err);
    console.log('aws result: ', result);
  });
});
