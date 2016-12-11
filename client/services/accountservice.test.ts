describe('Account Service Test',function(){
	
	beforeEach(angular.mock.module('AppDemo'));

	// Before each test set our injected Users factory (_AccountService_) to our local AccountService variable
	beforeEach(inject(function(_AccountService_) {
		AccountService = _AccountService_;
	}));

	// A simple test to verify the AccountService factory exists
	it('should exist', function() {
		expect(AccountService).toBeDefined();
	});

	it('should exist .getAll()', function() {
		expect(AccountService.getAll).toBeDefined();
	});
});