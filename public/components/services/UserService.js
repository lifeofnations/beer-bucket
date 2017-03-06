angular.module("myApp")

.service("UserService", ["$http", function ($http) {
    var self = this;
    this.user = {};

    this.logInUser = function (user) {
        $http.post("/auth/login", user)
            .then(function (response) {
                self.user = response.data.user;
            })
    };

    this.addUser = function (newUser) {
        $http.post("/auth/signup", newUser)
            .then(function (response) {
                return console.log(response.data.message)
            })
    }


}]);