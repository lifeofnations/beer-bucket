angular.module("myApp.Auth")

.controller("profileController", ["$scope", "UserService", function ($scope, UserService) {

    $scope.user = UserService.getUser();

    $scope.updateUser = function (update, check) {
        if (update.password !== $scope.confirmPassword) {
            return $scope.passwordMessage = "passwords do not match"
        }
        if (update.userName) $scope.user.userName = update.userName;
        $scope.user.password = update.password;
        UserService.updateUser($scope.user)
            .then(function (response) {
                $scope.user = response.user;
                $scope.update = {}
                $scope.confirmPassword = "";
                alert(response.message);
                $scope.user.password = "";
            })
    }

}]);

