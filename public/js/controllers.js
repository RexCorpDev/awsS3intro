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


})

app.controller('imagesCtrl', function($scope, $state, Upload){
  console.log('imagesCtrl');

  $scope.uploadImage = image => {
    console.log('Submit: ', image);
    if(!image){
      return Upload.upload($scope.file);
    } else {
      return Upload.upload(image);
    };

    Upload.upload({
      url: '/api/images/upload',
      data: { file : image }
    })
    .then(res => {
      console.log('res: ', res);
    })
    .catch(err => {
      console.log('err: ', err);
    });

  };


  $scope.cancel = () => {
    console.log('cancel');
    $scope.image = ""
  };


});


// app.controller('betaCtrl', function($scope, $state, <SERVICE NAME>){
//   console.log('betaCtrl');
//
//   //$scope.<ARRAY> = [];
//
// })
