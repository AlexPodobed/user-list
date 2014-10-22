/**
 * Created by Oleksii_Podobed on 10/20/2014.
 */
var appControllers = angular.module('appControllers', []);


appControllers.controller('HomeCtrl', ['$scope', function($scope){
    $scope.greeting = undefined;

    $scope.sayHello = function(){
        $scope.greeting = 'Hello Ari';
    }
}]);



appControllers.controller('UsersCtrl', ['$scope', 'Users', function($scope, Users){
    $scope.users = {};
    Users.get()
        .success(function(data){
           $scope.users = data;
        });
}]);

appControllers.controller('UserCtrl', ['$scope', '$routeParams', 'Users', function($scope, $routeParams, Users){
    var users = {};

    Users.get()
        .success(function(data){
            users = data;
            users.map(function(user){
                if(user._id === $routeParams.userId){
                    $scope.user = user;
                }
                return user;
            });
        });


}]);