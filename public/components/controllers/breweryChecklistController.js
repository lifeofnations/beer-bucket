angular.module("myApp")

.controller("breweryChecklistController", ["$scope", "BeerService", "BreweryService", "UserService", "$routeParams", function ($scope, BeerService, BreweryService, UserService, $routeParams) {

    $scope.user = UserService.getUser();
    console.log($scope.user);
    $scope.bucket = $scope.user.beersInBucket.toString();
    console.log($scope.bucket);

    $scope.getBeers = function (id) {
        BeerService.getBeers(id)
            .then(function (response) {
                //console.log(response);
                for (var i = 0; i < response.length; i++) {
                    if ($scope.user.beersInBucket.findIndex((elm) => elm._id === response[i]._id) >= 0) {
                        response[i].inBucket = true;
                    } else {
                        response[i].inBucket = false;
                    }
                    if ($scope.user.completedBeers.findIndex((elm) => elm._id === response[i]._id) >= 0) {
                        response[i].isCompleted = true;
                    } else {
                        response[i].isCompleted = false;
                    }
                }
                $scope.beers = response;
                $scope.beers = response.sort((a,b) => a.availableId - b.availableId);
                return BreweryService.displayBrewery(id)
            })
            .then(function (response) {
                return $scope.brewery = response[0];
                //console.log($scope.brewery);
            })
    };

    $scope.bucketChecker = function (id) {
        return $scope.user.beersInBucket.findIndex(elm => elm._id === id) < 0;
    };

    $scope.completedChecker = function (id) {
        return $scope.user.completedBeers.findIndex(elm => elm._id === id) >= 0;
    };

    /////////////////////////////////-->
    $scope.addToBucket = function (index) {
        $scope.user.beersInBucket.push($scope.beers[index]);
        UserService.updateBeers($scope.user);
        $scope.beers[index].inBucket = true;
        console.log($scope.user);
    };

    $scope.getBeers($routeParams.id);
        // .then(function () {
        //     for (var i = 0; i < $scope.beers.length) {
        //         if ($scope.user.beersInBucket.findIndex(elm => elm._id === $scope.beers[i]._id)) {
        //             $scope.beers[i].inBucket = true;
        //         }
        //         if ($scope.user.beersCompleted.findIndex(elm => elm._id === $scope.beers[i]._id)) {
        //             $scope.beers[i].isCompleted = true;
        //         }
        //     }
        // });

}]);