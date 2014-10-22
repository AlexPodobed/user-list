/**
 * Created by Oleksii_Podobed on 10/21/2014.
 */
describe('Unit: HomeCtrl', function(){
    beforeEach(module('myApp'));

    var ctrl, scope;

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();

        ctrl = $controller('HomeCtrl',{
            $scope: scope
        });
    }));

    it('should create $scope.greeting when calling sayHello',
    function(){
        expect(scope.greeting).toBeUndefined();
        scope.sayHello();
        expect(scope.greeting).toEqual('Hello Ari')
    })
});