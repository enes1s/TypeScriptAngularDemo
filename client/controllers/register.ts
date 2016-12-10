
module AppDemo {

	class RegisterController {

		private account : IAccount;
		private log:string;
		private accounts : IAccount[];
		static $inject = ["AccountService"];
		constructor(private accountService: IAccountService) {
			this.account = new Account;
			this.log = "";
		}

		submit() {
			this.accountService.save(this.account).then(
				(result : string) => {
					console.log(result);
					this.log = result;
					this.getAll();
				},
				(error : string) => {
					console.log(error);
					this.log = error;
				});
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
		.controller("RegisterController", RegisterController);
}