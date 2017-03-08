angular.module("myApp.Auth")

    .controller("loginController", ["$scope", "UserService", "$location", function ($scope, UserService, $location) {

        $scope.login = function (user) {
            UserService.logInUser(user)
                .then(function (response) {
                    $location.path("/your-beer-bucket");
                })
        }

        $scope.goSignup = function () {
            $location.path("/signup");
        }


    }])