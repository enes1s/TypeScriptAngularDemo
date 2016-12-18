describe('FooterController Test\n', function(){
    var ApplicationName;
    var Version;

    beforeEach(angular.mock.module('AppDemo'));
    beforeEach(inject(function(_ApplicationName_){
        ApplicationName = _ApplicationName_;
    }));
    
    beforeEach(inject(function(_Version_){
        Version = _Version_;
    }));

    it("Application name should be 'AngularTypeScript Demo'",function(){
        expect(ApplicationName).toEqual("AngularTypeScript Demo");
    });

    it('Version should be 1.0',function(){
        expect(Version).toEqual("1.0")
    });

});