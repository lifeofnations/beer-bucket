angular.module("myApp")

.controller("styleController", ["$scope", "CategoryService", "$routeParams", function ($scope, CategoryService, $routeParams) {

    $scope.getStyles = function (categoryId) {
        CategoryService.getStyles(categoryId)
            .then(response => $scope.styles = response)
    };

    $scope.getStyles($routeParams.id);

}]);