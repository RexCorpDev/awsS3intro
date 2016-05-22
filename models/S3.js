"use strict";

var AWS = require("aws-sdk");
var path = require("path");
var s3 = new AWS.S3();
var fs = require("fs");
let async = require('async');
var fileName = "fileToUpload.js";
var bucketName = "toby-s3-test";
var urlBase = "https://s3.amazonaws.com/";

var aws_s3 = {};
//to upload a file to the AWS bucket:

aws_s3.storeOn = function (dataToStore, callback) {

  let key = dataToStore.originalname.split(".")[0];

  let params = {
    Bucket: bucketName,
    Key: key,
    ACL: "public-read",
    Body: dataToStore.buffer
  };
  s3.putObject(params, function (error, result) {
    if (error) return callback(error);
    callback(null, result);
  });


};


aws_s3.getFile = function (dataToFetch, callback) {
  let params = {
    Bucket: bucketName,
    Key: dataToFetch.key,    
  };

  console.log("params: ", params)

  s3.getObject(params, function (error, data) {
    if (error) return callback(error);
    var dataToReturn = data.Body.toString("utf-8");
    callback(null, dataToReturn);
  });
};

aws_s3.getImg = function(dataToFetch, cb) {
  let params = {
    Bucket : bucketName,
    Key: dataToFetch.key,
  };

  s3.getObject(params, (err, data) => {
    if(err) return cb(err);
    let imgToReturn = data.Body;
    let decodedImage = new Buffer(imgToReturn, 'base64').toString('binary');
    cb(null, decodedImage);
  })
}

aws_s3.uploadMultiple = function (dataToStore, callback) {
  async.forEachOf(dataToStore, function (file, index, callback2) {
    let key = `motherfuckingpizza${index}`;
    let params = {
      Bucket: bucketName,
      Key: key,
      ACL: "public-read",
      Body: file.buffer
    };
    console.log("each file:", file.buffer);
    console.log("i: ", index);
    s3.upload(params, function (error, result) {
      callback2()
    });

  }, function (error) {
    if (error) return callback(error);
    callback(null)
  });
};

aws_s3.getBucketList = function (bucketName, callback) {
  console.log('bucketname: ', bucketName);
   let params = {
       Bucket: bucketName

   };
   s3.listObjects(params, function (error, data) {
       if (error) return callback(error);
       console.log("data: ", data.contents)
       callback(null, data);
   });
};


module.exports = aws_s3;
