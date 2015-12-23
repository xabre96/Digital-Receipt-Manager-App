angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.receiveReceipts', {
      url: '/page',
      views: {
        'tab1': {
          templateUrl: 'templates/receiveReceipts.html',
          controller: 'receiveReceiptsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.myReceipts', {
      url: '/page2',
      views: {
        'tab2': {
          templateUrl: 'templates/myReceipts.html',
          controller: 'myReceiptsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('nameReceipt', {
      url: '/page3',
      templateUrl: 'templates/nameReceipt.html',
      controller: 'nameReceiptCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1/page');

});