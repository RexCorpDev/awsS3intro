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

app.controller('templateLoginCtrl', function($scope, $state){
  console.log('templateLoginCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('templateRegisterCtrl', function($scope, $state){
  console.log('templateRegisterCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('templateForgotCtrl', function($scope, $state){
  console.log('templateForgotCtrl');

  //$scope.<ARRAY> = [];

})

app.controller('uploadCtrl', function($scope, $state, s3Upload){
  console.log('uploadCtrl');

  $scope.cancel = () => {
    console.log('cancel');
    $scope.image = ""
  };

  $scope.uploadFile = function () {
    let fileObj = {
      url: "/api/s3/addToBucket/",
      data: { newFile: $scope.uploadMe }
    };
    s3Upload.s3upload(fileObj);
  };

  $scope.retrieveFile = function () {
    console.log('get file');
    s3Upload.s3getFile($scope.fileToRetrieve)
    .then(res => {
      console.log(res.data);
      $scope.fileReceived = res;
    })
    .catch(err => {
      console.log('err: ', err);
    });
  };

  $scope.retrieveImage = function () {
    s3Upload.s3getImage($scope.fileToRetrieve)
    .then(function (response) {
      console.log("Response: ", response.data);
      $scope.fileReceived = response.data;
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });

  };

  $scope.submitMultipleFiles = function () {
    console.log("Files: ", $scope.newFiles);

    let fileObj = {
      url: "/api/s3/addMulti",
      arrayKey: "",
      data: {
        newFiles: $scope.newFiles
      }
    };

    s3Upload.s3MultiUp(fileObj);
  };

  $scope.getList = () => {
    console.log('get list');
    let queObj = { que : $scope.que }

    s3Upload.s3getList(queObj)
    .then(res => {
      $scope.fileReceived = res.data;
    });
  };
});

app.controller('ddgCtrl', function($scope, $state, DuckDuckGo){
  console.log('ddgCtrl');

  $scope.search = query => {
    console.log('query: ', query);
    DuckDuckGo.search(query)
    .then(res => {
      console.log('resdata ', res.data );
      $scope.searchResults = res.data.DATA;
    })
    .catch(err => {
      console.log('err: ', err);
    });
  };
});
