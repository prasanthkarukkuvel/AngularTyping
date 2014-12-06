// angular-typing
//
// Version: 0.1.1
// Website: http://www.codehard.in/jquery-typing/
// License: public domain <http://unlicense.org/>
// Author:  Prasanth <@prashanth702>
// Original version is here: https://github.com/narfdotpl/jquery-typing

'use strict';
// angular module 'angular-typing' 
angular.module('angular-typing', []).directive("typing",['$timeout','$parse',function($timeout, $parse){
	// directive 'typing'
	return {
		//allow only attributes
		restrict: 'A',
		link:function(scope, elem, attr) {
					// other variables
					var start = $parse(attr.typeStart), // parse typeStart
						stop = $parse(attr.typeEnd), // parse typeEnd
						delay = attr.typing, // delay. default: 400
						input = elem[0], // input element
						typing = false, 
						timeout;

					// typing started
					function started(event) {
						if(!typing)
						{
							// set flag to true..
							typing = true;
							if(start){
								// call typeStart method on the scope
								start(scope, { value: input.value });								
							}					
						}						
					}

					// typing ended
					function stopped(event, d) {
						if(typing){

							// clear and create until typing stopped
							$timeout.cancel(timeout);
							// timeout callback
							timeout = $timeout(function(){

								// finished typing...
								typing = false;		
								if(stop){
									// call typeEnd method on the scope
									stop(scope, { value: input.value });																	
								}					
							}		
							//check and assign defaults						
							, d >= 0 ? d : delay ? parseInt(delay) : 400);
						}
					}

					//event listeners
					input.addEventListener("keypress", started);
					input.addEventListener("keyup", stopped);
					// delete and backspace
					input.addEventListener("keydown", function(event){
						if (event.keyCode === 8 || event.keyCode === 46) {
							started(event);
						}
					});
					// blurs
					input.addEventListener("blur", function(event){
						stopped(event,0);
					});
				}
			};
		}]);