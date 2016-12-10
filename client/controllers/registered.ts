
module AppDemo {

	class RegisteredController {

		public registered: IAccount;
		static $inject = ["AccountService"];
		constructor(private accountService: IAccountService) {
			this.getRegistered();
		}


		getRegistered(){
			this.accountService.getRegistered().then(
				(result : IAccount) => {
					if(result){
						this.registered  = new Account(); 
						this.registered.name = result.name;
						this.registered.lastName = result.lastName;
						this.registered.dateOfBirth = result.dateOfBirth;
					}
				},
				(error : string) => {
					console.log(error);
				}
			);
		}

	}

    angular
		.module("AppDemo")
		.controller("RegisteredController", RegisteredController);
}