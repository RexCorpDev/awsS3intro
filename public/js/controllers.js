'use strict';

var app = angular.module('PhotoAlbum');

app.controller('slash', function(socket, $scope){
  console.log('slashCtrl');


});

app.controller('homeCtrl', function(socket, $scope){
  console.log('homeCtrl');

  var testFrontEnd = 'BackEnd, FrontEnd: TEST';
  socket.emit('SOCKET_TEMPLATE', testFrontEnd);

  socket.on('homeCtrl', data => {
    console.log('FR: BackEnd\n', data);
  });
});

app.controller('templateLoginCtrl', function($scope, $state, template_service){
  console.log('templateLoginCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('templateRegisterCtrl', function($scope, $state, template_service){
  console.log('templateRegisterCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('templateForgotCtrl', function($scope, $state, template_service){
  console.log('templateForgotCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('albumsCtrl', function($scope, $state, template_service){
  console.log('albumsCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('imagesCtrl', function($scope, $state, FileUpload){
  console.log('imagesCtrl');

  $scope.uploadImage = image => {
    var fileObj = image;
    console.log('ngfile: ', fileObj);
    FileUpload.uploadFileToUrl(fileObj);
  };

});


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
