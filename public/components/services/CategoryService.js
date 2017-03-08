angular.module("myApp")

.service("CategoryService", ["$http", function ($http) {

    this.categories = "";
    this.styles = [];
    this.getCategories = function () {
        return $http.get("/categories")
            .then((response) => {
                return this.categories = response.data;
            })
    };
    
    this.getStyles = function (categoryId) {
        return $http.get("/categories/" + categoryId)
            .then(response => {
                console.log(response);
                return this.styles = response.data
            })
    }

}]);