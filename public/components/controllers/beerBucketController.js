angular.module("myApp")

.controller("beerBucketController", ["$scope", "BeerService", function ($scope, BeerService) {

    $scope.getBeers = function () {
        BeerService.getBucketBeers()
            .then(function (response) {
                $scope.beers = response;
            })
    };

    $scope.removeFromBucket = function (index) {
        $scope.beers[index].inBucket = false;
        BeerService.updateBeer($scope.beers[index])
            .then(function (response) {
                $scope.getBeers();
            })
    };

    $scope.getBeers();

}]);