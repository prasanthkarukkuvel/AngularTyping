# Angular-typing

Simple angular version of [JQuery Typing](http://narf.pl/jquery-typing) allows to bind callbacks for started and stopped typing events. *No dependency for JQuery* :wink:

## Example

### Module

Include module **angular-typing** to your app
```javascript
angular.module(..., ['angular-typing'])
```
### HTML

Add the directive to your textbox
```html
<div ng-controller="typeController as ctrl">
	<input type="text" typing type-delay="400" type-start="ctrl.typeStart(value)" type-end="ctrl.typeEnd(value)" />
</div>
```
* `typing` - directive, can be used as an attribute or as a class

* `type-delay` - the amount of time taken to trigger `type-end` after the user stops typing. Default value is 400ms.

* `type-start` - callback function triggered when the user starts typing.

* `type-end` - callback function triggered after the user stops typing which inlcudes the `type-delay`.

### Controller

Initialize type start and end functions in your controller
```javascript
angular.module(...).controller("typeController",[..., function() {
	this.typeStart = function(value) { 
		... 
	}

	this.typeEnd = function(value) {
		// update model, send server request etc..
		...
	}
}]);
```
## Demo

[Download Link](https://github.com/prashanth702/AngularTyping/tree/master/demo). Live demo coming soon. :grin:

## License

This plugin is available under [the MIT license](http://mths.be/mit).

