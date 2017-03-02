angular.module("myApp")

.controller("categoryController", ["$scope", "CategoryService", function ($scope, CategoryService) {
    $scope.categories = [];
    $scope.getCategories = function () {
        if (true) {
            CategoryService.getCategories()
                .then(response => {
                    console.log(response);
                    return $scope.categories = response
                })
        } else {
            $scope.categories = CategoryService.categories;
            console.log("i think its there");
        }
    }

    $scope.getCategories();

}]);