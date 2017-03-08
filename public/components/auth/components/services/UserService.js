angular.module("myApp.Auth")

.service("UserService", ["$http", "$localStorage", "TokenService", function ($http, $localStorage, TokenService) {
    var self = this;
    this.user = {};

    this.logInUser = function (user) {
        return $http.post("/auth/login", user)
            .then(function (response) {
                console.log(response.data.user);
                TokenService.setToken(response.data.token);
                $localStorage.user = response.data.user;
                return response.data;
            })
    };

    this.getUser = function () {
        return $localStorage.user;
    };

    this.updateUser = function (user) {
        return $http.put("/api/user", user)
            // .then(function (response) {
            //     return $localStorage.user = response.data;
            // })
    };

    this.addUser = function (newUser) {
        return $http.post("/auth/signup", newUser)
    };

    this.logout = function () {
        TokenService.removeToken();
        delete $localStorage.user;
    };

    this.isAuthenticated = function () {
        return !!$localStorage.user && !!TokenService.getToken();
    }

}]);