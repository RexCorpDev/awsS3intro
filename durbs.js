"use strict";

var AWS = require("aws-sdk");
var path = require("path");
var s3 = new AWS.S3();
var fs = require("fs");

var fileName = "fileToUpload.js";
var bucketName = "template-test-test";
var urlBase = "https://s3-us-west-1.amazonaws.com/";

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


aws_s3.getFrom = function (dataToFetch, callback) {
   let params = {
       Bucket: bucketName,
       Key: dataToFetch.key
   };

   console.log("params: ", params)

   s3.getObject(params, function (error, data) {
       if (error) return callback(error);
       var dataToReturn = data.Body.toString("utf-8");
       callback(null, dataToReturn);
   });
};
