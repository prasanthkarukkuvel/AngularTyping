// angular module 'tyingDemo' include dependency 'angular-typing'
angular.module("typingDemo", ['angular-typing']).controller('DemoController', [function(){
	var self = this;
	self.status = "Start typing..";
	self.text = "";	

	self.typeStart = function(value) {	
		self.status = "Now your are typing something..";
	};

	self.typeEnd = function(value) {
		self.status = value.trim() === '' ? "Start typing.." : "You have typed: " + value;
	};

	self.currentStatus = function(){
		return self.status;
	};
}]);