// angular module 'tyingDemo' include dependency 'angular-typing'
angular.module("typingDemo", ['angular-typing']).controller('DemoController', [function(){
	var self = this;
	self.status = "Start typing..";
	self.text = "";	
	self.delay = 400;
	self.typing = false;

	self.typeStart = function(value) {	
		self.typing = true;
		self.status = "Now your are typing something..";
	};

	self.typeEnd = function(value) {	
		self.typing = false;	
		self.status = value.input.trim() === '' ? "Start typing.." : "You have typed: " + value.input;
	};

	self.currentStatus = function() {
		return self.status;
	};

	self.isTyping = function() {		
		return self.typing;
	};

	self.getDelay = function(){
		return self.delay;
	}
}]);