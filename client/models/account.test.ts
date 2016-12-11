describe('Account Model Test',function(){
	var account = new AppDemo.Account();

	it('should be born friday at 2.2.1797', function() {
		account.dateOfBirth = new Date(1979,1,2);
		expect(true).toEqual(account.isBornFriday());
	});

	it('should not be born friday at 3.2.1797', function() {
		account.dateOfBirth = new Date(1979,1,3);
		expect(false).toEqual(account.isBornFriday());
	});
	
});