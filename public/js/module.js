'use strict';

var app = angular.module('PhotoAlbum', ['ui.bootstrap', 'ui.router', 'oitozero.ngSweetAlert', 'btford.socket-io', 'ngFileUpload' ]);

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider
  .state('home', {
    url           : '/home' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('templateLogin', {
    url           : '/templateLogin' ,
    templateUrl   : 'html/templateLogin.html' ,
    controller    : 'templateLoginCtrl'
  })
  .state('templateRegister', {
    url           : '/templateRegister' ,
    templateUrl   : 'html/templateRegister.html' ,
    controller    : 'templateRegisterCtrl'
  })
  .state('templateForgot', {
    url           : '/templateForgot' ,
    templateUrl   : 'html/templateForgot.html' ,
    controller    : 'templateForgotCtrl'
  })
  .state('upload', {
    url           : '/upload' ,
    templateUrl   : 'html/upload.html' ,
    controller    : 'uploadCtrl'
  })
  .state('ddg', {
    url           : '/ddg' ,
    templateUrl   : 'html/ddg.html' ,
    controller    : 'ddgCtrl'
  });
  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })

  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
})
