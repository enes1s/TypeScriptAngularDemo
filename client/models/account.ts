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
		dateOfBirth: Date;
		isLegalAge():boolean;
		isBornFriday():boolean;
	}

	export class Account  implements IAccount{
		id:number;
		name: string;
		lastName: string;
		address: string;
		dateOfBirth: Date;
		isLegalAge():boolean{
			return this.getAge() >= LegalAge;
		}
		
		isBornFriday():boolean{
			if(! this.dateOfBirth){
				return false;
			}
			return this.dateOfBirth.getDay() == DaysOfWeek.Friday; 
		}

		private getAge():number {
			var today = new Date();
			var age = today.getFullYear() - this.dateOfBirth.getFullYear();
			var m = today.getMonth() - this.dateOfBirth.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < this.dateOfBirth.getDate())) {
				age--;
			}
			return age;
		}
	}
}