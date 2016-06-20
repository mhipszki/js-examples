/*

	Objects, inheritance and the 'this' keyword in JavaScript

	- object creation
	- prototype-based inheritance instead of class-based

*/

console.log('--- Objects and inheritance in JavaScript\n');

(function showObjectLiterals() {

	console.log('--- object literal\n');

	var obj = {
		foo: 'bar',
		bar: function method() {
			// do something
		}
	};

	console.log(obj);
	console.log();

});

(function showObjectCreation() {

	console.log('--- object creation\n');

	// prototypal model
	var obj = Object.create(null);
	obj.foo = 'bar';

	console.log(obj);
	console.log();

	// classical model
	function Something() {
		// constructor function
	}

	var anotherObj = new Something();
	anotherObj.bar = 'baz';

	console.log(anotherObj);
	console.log();

});

(function showPrototypeBasedInheritance() {

	console.log('--- prototype-based inheritance\n');

	var obj = Object.create(null);
	obj.foo = 'bar';

	console.log('object with _no_ prototype');
	console.log(obj);
	console.log('obj.prototype:', obj.prototype);
	console.log();

	var obj2 = Object.create(obj);
	obj2.bar = 'baz';

	console.log('object _with_ prototype');
	console.log(obj2);
	console.log('obj2.foo:', obj2.foo, '(from prototype)');
	console.log('obj2.bar:', obj2.bar, '(own property)');

});

(function showThisKeyword() {

	console.log('--- this keyword / execution context\n');

	function get() {
		return this.value;
	}

	var obj1 = {
		value: 1,
		get: get
	};

	var obj2 = {
		value: 2,
		get: get
	};

	console.log('obj1.get() returns ', obj1.get());
	console.log('obj2.get() returns ', obj2.get());
	console.log('get() returns ', get());

	console.log('get() returns ', get.call(obj2));

});
