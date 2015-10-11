/**
 * Created by chaochen on 15/10/10.
 */
//function HelloController($scope){
//    $scope.person = {name:'Hello'};
//}
var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope) {
    $scope.greeting = {text: "Ari Lerner"};

}])

//app.controller('MyController', function($scope) {
//    $scope.greeting = {text: "Ari Lerner"};
//})