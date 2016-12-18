module AppDemo {
    "use strict";

    function routes($routeProvider: ng.route.IRouteProvider){
              
        $routeProvider
            .when("/register", {
                templateUrl: "/client/views/register.html",
                controller: "RegisterController",
                controllerAs: "vm"
            })
            .when("/accounts", {
                templateUrl: "/client/views/accounts.html",
                controller: "AccountsController",
                controllerAs: "vm"
            })  
            .when("/users", {
                templateUrl: "/client/views/accounts.html",
                controller: "UsersController",
                controllerAs: "vm"
            })                        
            .otherwise({
                redirectTo: "/register"
            });
    }

    routes.$inject = ["$routeProvider"]

    angular
        .module("AppDemo")
        .config(routes);
}