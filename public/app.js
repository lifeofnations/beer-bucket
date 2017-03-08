angular.module("myApp", ["ngRoute", "myApp.Auth"])

.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "components/views/home.html",
            controller: "homeController"
        })
        .when("/your-beer-bucket", {
            templateUrl: "components/views/beer-bucket.html",
            controller: "beerBucketController"
        })
        .when("/brewery", {
            templateUrl: "components/views/brewery.html",
            controller: "breweryController"
        })
        .when("/brewery-list/:id", {
            templateUrl: "components/views/brewery-checklist.html",
            controller: "breweryChecklistController"
        })
        .when("/beer-categories", {
            templateUrl: "components/views/beer-categories.html",
            controller: "categoryController"
        })
        .when("/beer-styles/:id", {
            templateUrl: "components/views/styles.html",
            controller: "styleController"
        })
        .when("/your-completed-beers", {
            templateUrl: "components/views/completed-beer.html",
            controller: "completedController"
        })
        .otherwise("/home")
}]);