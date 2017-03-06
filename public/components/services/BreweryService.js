angular.module("myApp")

    .service("BreweryService", ["$http", function ($http) {
        var self = this;
        var wentApi = false;
        this.brewerys = [];
        this.brewery = {};

        // this.getBrewery = function (id, name) {
        //     return $http.get("/brewery/" + id)
        //         .then(function (response) {
        //                 return response.data;
        //             },
        //             function (response) {
        //                 return self.goToApi(name);
        //         })
        //
        //
        // };

        this.getBreweries = function () {
            return $http.get("/brewery")
                .then(function (response) {
                    return response.data
                })
        };

        this.displayBrewery = function (id) {
            return $http.get("/brewery?id=" + id)
                .then(function (response) {
                    return response.data
                })
        }

        this.getBrewery = function (name) {
            return $http.get("/brewerydb/" + name)
                .then(function (response) {
                        console.log(response.data.data);
                        return response.data.data[0];
                    },
                    function (response) {
                        console.log("error");
                    })
                .then(function (response) {
                        return $http.post("/brewery", response)
                    },
                    function (response) {
                        console.log("error")
                    })
                .then(function (response) {
                        self.id = response.data.id;
                        return $http.get("/beerdb/" + response.data.id)
                    },
                    function (response) {
                        console.log("getting beer error")
                    })
                .then(function (response) {
                        for (var i = 0; i < response.data.data.length; i++) {
                            response.data.data[i].breweryId = self.id;
                        }
                        while (response.data.data.length) {
                            if (response.data.data.length <= 20) {
                                $http.post("/beers", response.data.data.splice(0, response.data.data.length))
                            } else {
                                var toPost = response.data.data.splice(0, 20);
                                $http.post("/beers", toPost)
                            }
                        }
                        return ('success')

                    })
        };

        this.removeBrewery = function (id) {
            return $http.delete("/brewery/" + id)
                    .then(response => response.data)
        }

    }]);