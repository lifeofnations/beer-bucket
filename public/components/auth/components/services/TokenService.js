angular.module("myApp.Auth")

.service("TokenService", ["$localStorage", function ($localStorage) {

    this.setToken = function (token) {
        $localStorage.token = token;
    }

    this.getToken = function () {
        return $localStorage.token;
    }

    this.removeToken = function () {
        delete $localStorage.token;
    }

}])