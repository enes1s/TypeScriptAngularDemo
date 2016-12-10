module AppDemo {
    "use strict";

    function routes($routeProvider: ng.route.IRouteProvider){
              
        $routeProvider
            .when("/register", {
                templateUrl: "/client/views/register.html",
                controller: "RegisterController",
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