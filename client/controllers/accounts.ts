
module AppDemo {

	class AccountsController {

		private account : IAccount;
		private log:string;
		private accounts : IAccount[];
		public maxDate:Date;
		public registered: IAccount;

		static $inject = ["AccountService"];
		constructor(private accountService: IAccountService) {
			this.account = new Account();
			this.log = "";
			this.maxDate = new Date();
		}

		getAll(){
			this.accountService.getAll().then(
				(result : IAccount[]) => {
					this.accounts = result;
				},
				(error : string) => {
					console.log(error);
					this.log = error;
				}
			);
		}

		getRegistered(){
			this.accountService.getRegistered().then(
				(result : IAccount) => {
					this.registered = result;
				},
				(error : string) => {
					console.log(error);
					this.log = error;
				}
			);
		}

		remove(id:number){
			this.accountService.remove(id).then(
				(id : number) => {
					this.log = "Account with id " + id + " removed." 
					this.getAll();
				},
				(error: string) => {
					console.log(error);
					this.log = error;
				}
			);
		}

	}

    angular
		.module("AppDemo")
		.controller("AccountsController", AccountsController);
}