/**
 * Created by Kevin on 10/8/2014.
 */
var app = angular.module('myApp', []);
app.directive("scroll", function($window){
    return function(scope, element, attrs){
        angular.element($window).bind("scroll", function(){
            scope.isChange = false;
            if(this.pageYOffset >= 100)
                scope.isChange = true;
            scope.$apply();
        })
    }
})