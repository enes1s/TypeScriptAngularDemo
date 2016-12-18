module AppDemo{
    class UsersController {
        private accounts:IAccount[];
        static $inject = ["UsersFactory"];
        constructor(private UsersFactory:IUsersFactory){
            this.accounts = UsersFactory.getAll();
        }

        getAll(){
            return this.accounts;
        }
    }

    angular.module("AppDemo").controller("UsersController",UsersController);
}