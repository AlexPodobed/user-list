/**
 * Created by Oleksii_Podobed on 10/20/2014.
 */
angular
    .module('myApp', [
        'ngRoute',
        'appControllers',
        'appServices'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .when('/list', {
                templateUrl: 'templates/users-list.html',
                controller: 'UsersCtrl'
            })
            .when('/detail/:userId', {
                templateUrl: 'templates/user-detail.html',
                controller: 'UserCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);