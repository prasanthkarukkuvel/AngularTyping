'use strict';
angular.module('angular-typing', []).directive("typing",['$timeout','$parse',function($timeout, $parse){
			return{
				link:function(scope, elem, attr) {
					var start = $parse(attr.typeStart), stop = $parse(attr.typeEnd), delay = attr.typing, input = elem[0], typing = false, timeout;
					function started(event) {
						if(!typing)
						{
							typing = true;
							if(start){
								start(scope, { value: input.value });
								console.log('s');
							}					
						}						
					}
					function stopped(event, d) {
						if(typing){
							$timeout.cancel(timeout);
							timeout = $timeout(function(){
								typing = false;		
								if(stop){
									stop(scope, { value: input.value });	
									console.log('e');								
								}					
							}								
							, d >= 0 ? d : delay ? parseInt(delay) : 400);
						}
					}

					input.addEventListener("keypress", started);
					input.addEventListener("keyup", stopped);
					input.addEventListener("keydown", function(event){
						if (event.keyCode === 8 || event.keyCode === 46) {
							started(event);
						}
					});
					input.addEventListener("blur", function(event){
						stopped(event,0);
					});

				}
			};
		}]);