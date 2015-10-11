var app = angular.module('CartApp', [])
    app.controller('CartController', function ($scope) {
        $scope.items = [{
            title: 'item1',
            quantity: 2,
            price: 5.40
        }, {
            title: 'item2',
            quantity: 1,
            price: 12.40
        }, {
            title: 'item3',
            quantity: 1,
            price: 45.82
        }];

        $scope.remove = function (index) {
            $scope.items.splice(index, 1);
        };

        $scope.totalPirce = function () {
            var total = 0;
            angular.forEach($scope.items, function (value, key) {
                total += value.quantity * value.price;
            });
            return total;
        };
    });