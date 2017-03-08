angular.module("myApp")

.service("BeerService", ["$http", function ($http) {
    var self = this;

    this.getBeers = function (id) {
        return $http.get("/api/beers" + "?breweryId=" + id)
            .then(function (response) {
                return response.data;
            })
    }

    // this.updateBeer = function (beer) {
    //     return $http.put("/api/beers/" + beer._id, beer)
    //         .then(function (response) {
    //             return response;
    //         })
    // }


    /////////////////////////-->
    // this.getBucketBeers = function () {
    //     return $http.get("/api/beers" + "?inBucket=true")
    //         .then(function (response) {
    //             return response.data
    //         })
    // }


}]);