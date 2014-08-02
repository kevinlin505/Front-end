/**
 * Created by Kevin on 8/1/14.
 */
var startApp = angular.module('startApp', ['ui.bootstrap']);
startApp.controller('startController', function($scope, $modal, $log){
    $scope.open = function(size){
        $log.info('testing');
        var modalInstance = $modal.open({
            templateUrl: 'start.html',
            controller: modalInstanceCtrl,
            size: size
        })
    };

    var modalInstanceCtrl = function($scope, $modalInstance){
        $scope.ok = function(){
          $modalInstance.close('Data went through');
        };

        $scope.cancel = function(){
          $modalInstance.dismiss('cancel');
        };
    };
});