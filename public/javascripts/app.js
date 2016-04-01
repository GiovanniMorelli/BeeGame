var bee = angular.module('bee',['ngRoute',
    'ngMessages',
    'ngMaterial',
    'ngMdIcons']);

bee.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/homePageBee', {
            templateUrl: '/beeGame'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);
