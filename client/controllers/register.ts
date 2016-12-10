
module AppDemo {

	class RegisterController {

		private account : IAccount;
		private log:string;
		private accounts : IAccount[];
		private window;
		public maxDate:Date;

		static $inject = ["AccountService","$window"];
		constructor(private accountService: IAccountService, $route) {
			this.account = new Account;
			this.log = "";
			this.maxDate = new Date();
			this.window = $route;
		}

		submit() {
			var route = this.window; 
			var accountService = this.accountService;
			this.accountService.save(this.account).then(
				(result : string) => {
					window.location.reload();
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