angular.module("myApp")

.controller("beerBucketController", ["$scope", "BeerService", "UserService", function ($scope, BeerService, UserService) {

    $scope.user = UserService.getUser();
    console.log($scope.user);

    $scope.removeFromBucket = function (index) {
        $scope.user.beersInBucket.splice(index, 1);
        UserService.updateUser($scope.user)
    };

    $scope.beerComplete = function (index) {
        $scope.user.completedBeers.push($scope.user.beersInBucket[index]);
        $scope.user.beersInBucket.splice(index, 1);
        UserService.updateUser($scope.user);
    };

}]);