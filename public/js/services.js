'use strict';

var app = angular.module('PhotoAlbum');

app.service('template_service', function(){



});

app.service('FileUpload', function(){

  this.uploadFileToUrl = fileObj => {
    // var fd = new FormData();
    // fd.append('file', file);
    //
    // $http.post(uploadUrl, fd, {
    //   transformRequest : angular.identity,
    //   headers: {'Contenty-Type': undefined}
    // })
    //
    return $http.post('/upload', fileObj)
    .then(res => {
      this.
    })

  }


});
