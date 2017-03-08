angular.module("myApp.Auth")

.service("AuthInterceptor", ["$q", "$location", "TokenService", "$localStorage", function ($q, $location, TokenService, $localStorage) {

    this.request = function (config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        };
        return config;
    };

    this.responseError = function (response) {
        if (response.status === 401) {
            TokenService.removeToken();
            delete $localStorage.user;
            $location.path("/login");
        };
        return $q.reject(response);
    };

}]);