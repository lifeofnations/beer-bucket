angular.module("myApp")

.controller("breweryController", ["$scope", "BreweryService", function ($scope, BreweryService) {

        $scope.getBreweries = function() {
            BreweryService.getBreweries()
                .then(function (response) {
                    console.log(response);
                    $scope.breweries = response;
                })
        };

        $scope.getBreweries();

        $scope.addBrewery = function (name) {
            BreweryService.getBrewery(name)
                .then(function (response) {
                    console.log(response);
                    $scope.getBreweries();
                })
        };

        $scope.removeBrewery = function(index) {
            BreweryService.removeBrewery($scope.breweries[index]._id)
                .then(response => $scope.getBreweries())
        }


}]);