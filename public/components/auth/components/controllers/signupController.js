angular.module("myApp.Auth")

.controller("signupController", ["$scope", "UserService", "$location", function ($scope, UserService, $location) {

    $scope.signup = function (user) {
        if (user.password !== $scope.confirmPassword) {
            $scope.passwordMessage = "Passwords do not match!"
        } else {
            UserService.addUser(user)
                .then(function (response) {
                    //UserService.logInUser(response.data.user);
                    $location.path("/your-beer-bucket");
                },
                function (response) {
                    alert(response.data.message);
                })
        }
    }

}]);