module AppDemo {
	
	const LegalAge:number = 21;

	enum DaysOfWeek {
		Sunday,
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday
	}


	export interface IAccount {
		id:number;
		name:string;
		lastName:string;
		address:string;
		dateOfBirth: string;
		isLegalAge():boolean;
		isBornFriday():boolean;
	}

	export class Account  implements IAccount{
		id:number;
		name: string;
		lastName: string;
		address: string;
		dateOfBirth: string;
		isLegalAge():boolean{
			return this.getAge() >= LegalAge;
		}
		
		isBornFriday():boolean{
			var birthDate = new Date(this.dateOfBirth);
			return birthDate.getDay() == DaysOfWeek.Friday; 
		}

		private getAge():number {
			var today = new Date();
			var birthDate = new Date(this.dateOfBirth);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		}
	}
}