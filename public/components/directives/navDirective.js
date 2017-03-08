angular.module("myApp")

.directive("mynav", ["UserService", function (UserService) {
    return {
        templateUrl: "components/directives/nav.html",
        controller: function ($scope) {
            $scope.userService = UserService;
        }
    }

}]);