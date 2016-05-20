'use strict';

var app = angular.module('PhotoAlbum');

app.factory('socket', function (socketFactory) {
  var service = socketFactory();
  service.forward('error');
  return service;
});
