module AppDemo {
    "use strict";

    function dateProvider($mdDateLocaleProvider){
              
         $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('YYYY-MM-DD');
        };
    }

    angular
        .module("AppDemo")
        .config(dateProvider);
}