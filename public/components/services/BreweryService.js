angular.module("myApp")

    .service("BreweryService", ["$http", function ($http) {
        var self = this;
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
            return $http.get("/api/brewery")
                .then(function (response) {
                    return response.data
                })
        };

        this.displayBrewery = function (id) {
            return $http.get("/api/brewery?id=" + id)
                .then(function (response) {
                    return response.data
                })
        }

        this.getBrewery = function (name) {
            return $http.get("/api/brewerydb/" + name)
                .then(function (response) {
                        console.log(response.data.data);
                        return response.data.data[0];
                    },
                    function (response) {
                        console.log("error");
                    })
                .then(function (response) {
                        return $http.post("/api/brewery", response)
                    },
                    function (response) {
                        console.log("error")
                    })
                .then(function (response) {
                        self.id = response.data.id;
                        return $http.get("/api/beerdb/" + response.data.id)
                    },
                    function (response) {
                        console.log("getting beer error")
                    })
                .then(function (response) {
                        for (var i = 0; i < response.data.data.length; i++) {
                            response.data.data[i].breweryId = self.id;
                        }
                        console.log(response.data.data);
                        while (response.data.data.length) {
                            if (response.data.data.length <= 20) {
                                console.log(response.data.data, "last");
                                $http.post("/api/beers", response.data.data.splice(0, response.data.data.length))
                            } else {
                                var toPost = response.data.data.splice(0, 20);
                                console.log(toPost);
                                $http.post("/api/beers", toPost)
                            }
                        }
                        return ('success')

                    })
        };

        this.removeBrewery = function (id) {
            return $http.delete("/api/brewery/" + id)
                    .then(response => response.data)
        }

    }]);