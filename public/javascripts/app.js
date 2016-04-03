var beeApp = angular.module('bee',['ngRoute',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons']);

beeApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/homePageBee', {
            templateUrl: '/beeGame'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
