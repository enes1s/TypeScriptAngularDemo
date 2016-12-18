module AppDemo{
    class FooterController{
        private applicationName:string;
        private version:string;
        static $inject = ["ApplicationName","Version"];
        constructor(private ApplicationName,private Version){
            this.applicationName = ApplicationName;
            this.version = Version;
        }
    }

    angular.module("AppDemo.Footer").controller("FooterController",FooterController)
}