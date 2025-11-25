//document.write("<base href='/' />");

angular.module("app", [ 'ngRoute', 'treeControl', 'ui.mask' ])
.config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider) {

  $httpProvider.defaults.withCredentials = true;

}]);