
module AppDemo {

	class RegisterController {

		private account : IAccount;
		private log:string;
		private accounts : IAccount[];
		private rootScope;
		public maxDate:Date;

		static $inject = ["AccountService","$rootScope"];
		constructor(private accountService: IAccountService, $rootScope: ng.IRootScopeService) {
			this.account = new Account;
			this.log = "";
			this.maxDate = new Date();
			this.rootScope = $rootScope;
		}

		submit() {
			var rootScope = this.rootScope; 
			var accountService = this.accountService;
			this.accountService.save(this.account).then(
				(result : string) => {
					rootScope.registered = new Account();
					rootScope.registered.name = this.account.name;
					rootScope.registered.lastName = this.account.lastName;
					rootScope.registered.dateOfBirth = this.account.dateOfBirth;
					console.log(result);
					this.log = result;

				},
				(error : string) => {
					console.log(error);
					this.log = error;
				});
		}

	}

    angular
		.module("AppDemo")
		.controller("RegisterController", RegisterController);
}