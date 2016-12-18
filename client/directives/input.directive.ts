module AppDemo{
    class InputDirective {
        public scope:any;
        public restrict:string;
        public replace:boolean;
        public template:string;
        public link:(scope:any,element:ng.IAugmentedJQuery,attrs:ng.IAttributes) => void;
        constructor(){
            this.scope = {
                message:'=',
                label:'@',
                showMessage:'&'
            };
            this.restrict = "AEC";
            this.replace = true;
            this.template = "<md-input-container class='md-block'>" +
                    "<label>{{label}}</label>" +
				    "<input ng-model='message' ng-required>" +
			    "</md-input-container>";
            InputDirective.prototype.link = (scope:any,element:ng.IAugmentedJQuery,attrs:ng.IAttributes) => {
                scope.$watch('message', () => {
                    console.log('message changed')
                });

            }
        }
        public static Factory():ng.Injectable<ng.IDirectiveFactory>{
            var directive = () => {
                return new InputDirective();
            };
            return directive;
        }
    }
    angular.module("AppDemo.Directives").directive('appInput', InputDirective.Factory());
}