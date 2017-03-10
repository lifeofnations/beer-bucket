angular.module("myApp.Auth", ["ngRoute", "ngStorage"])

.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {

    $routeProvider
        .when("/signup", {
            templateUrl: "components/auth/components/views/signup.html",
            controller: "signupController"
        })
        .when("/login", {
            templateUrl: "components/auth/components/views/login.html",
            controller: "loginController"
        })
        .when("/logout", {
            template: "",
            controller: "logoutController"
        })
        .when("/profile", {
            templateUrl: "components/auth/components/views/profile.html",
            controller: "profileController"
        });

    $httpProvider.interceptors.push("AuthInterceptor");

}]);