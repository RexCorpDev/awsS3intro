'use strict';

var app = angular.module('PhotoAlbum');

app.service('s3Upload', function(Upload, $http){

  this.s3upload= file => {
    console.log(file);
    Upload.upload(file)
    .then(function (response) {
      console.log("Response: ", response);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
  };

  this.s3getFile = getFile => {
    return $http.put("/api/s3/getFromBucket?file=true", getFile);
  };

  this.s3getImage = getImage => {
    return $http.put("/api/s3/getFromBucket?image=true", getImage);
  };

  this.s3MultiUp = Files => {
    Upload.upload(Files)
    .then(function (response) {
      console.log("Response: ", response);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
  };

  this.s3getList = queObj => {
    return $http.post('/api/s3/getBucketList', queObj);
  };

});

app.service('DuckDuckGo', function($http, $q){

  this.search = search => {
    let searchObj = {search}
    console.log('search: ', search);
    return $http.post('/api/ddg', searchObj);
  };
});
