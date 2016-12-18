module AppDemo{

    export interface IUsersFactory{
        getAll():IAccount[];
    }

    class UsersFactory implements IUsersFactory{
        private accounts:IAccount[];
        constructor(){

            this.accounts = [
                new Account(1,"enes","hali","gen lev",new Date()),
                new Account(2,"veronika","valentin","podvozna 18",new Date())
            ];
        }
        getAll():IAccount[]{
            return this.accounts;
        }
    }
    
    //var dummy = new Account();
    
    angular.module('AppDemo').factory('UsersFactory', () => {
            return new UsersFactory()
        });
}