angular.module("myApp")

.controller("breweryChecklistController", ["$scope", "BeerService", "BreweryService", "$routeParams", function ($scope, BeerService, BreweryService, $routeParams) {

    //$scope.getUser

    $scope.getBeers = function (id) {
        BeerService.getBeers(id)
            .then(function (response) {
                $scope.beers = response;
                $scope.beers = response.sort((a,b) => a.availableId - b.availableId);
                console.log(response);
                return BreweryService.displayBrewery(id)
            })
            .then(function (response) {
                $scope.brewery = response[0];
                console.log($scope.brewery);
            })
    };


    ////////////////////////////////-->
    $scope.checkOff = function (index) {
        BeerService.updateBeer($scope.beers[index])
    };


    /////////////////////////////////-->
    $scope.addToBucket = function (index) {
        $scope.user.beersInBucket.push($scope.beers[index]._id);
        UserService.updateUser($scope.user)
    };

    $scope.getBeers($routeParams.id);

}]);