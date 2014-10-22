
var appServices = angular.module('appServices', []);


appServices.factory('Users', ['$http', function($http){
    return {
        get: function(){
            return $http.get('db/users.json')
        }
    }
}]);