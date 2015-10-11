/**
 * Created by chaochen on 15/10/10.
 */
var app = angular.module('myApp', []);



app.controller('MyController', function($scope) {
    $scope.person = { name: "Ari Lerner" };
    var updateClock = function() {
        $scope.clock = new Date();
    };
    var timer = setInterval(function() {
        $scope.$apply(updateClock);  }, 1000);  updateClock();
});
