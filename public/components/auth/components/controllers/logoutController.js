angular.module("myApp.Auth")

    .controller("logoutController", ["$scope", "UserService", "$location", function ($scope, UserService, $location) {

        $scope.logout = function() {
            UserService.logout();
            $location.path("/home");
        };

        $scope.logout();


    }]);