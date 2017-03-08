angular.module("myApp")

.controller("completedController", ["$scope", "UserService", function ($scope, UserService) {

    $scope.user = UserService.getUser();

    $scope.removeFromCompleted = function (index) {
        $scope.user.completedBeers.splice(index, 1);
        UserService.updateUser($scope.user);
    };

}])