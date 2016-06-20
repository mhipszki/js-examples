/*
	primitive types are

	- object
	- string
	- number
	- boolean
	- null
	- undefined
*/

console.log('--- Primitive types');
console.log('\n');

// object
(function showObj() {
	console.log('--- object');

	var obj = {
		key: 'some value'
	}

	console.log(obj);
	console.log('obj.key = ', obj.key);
	console.log('obj["key"] = ', obj['key']);
	console.log('\n');
});

// string
(function showString() {
	console.log('--- string');

	var str = 'some string';
	var str2 = new String(2);

	console.log('str = ', str);
	console.log('str.toUpperCase() = ', str.toUpperCase());
	console.log('\n');
});

// number
(function showNumber() {
	console.log('--- number');

	var num = 0.1;
	var num2 = new Number('blaa');

	console.log('num = ', num);
	console.log('num2 = ', num2);
	console.log('num + 0.2 = ', num + 0.2); // ==? 0.3
	console.log('\n');
});

// boolean
(function showBoolean() {
	console.log('--- boolean');

	var bool = true;
	var otherBool = new Boolean(false);
	var anotherBool = new Boolean('some string');

	console.log('bool && (otherBool || anotherBool) = ', bool && (otherBool || anotherBool));
	console.log(bool, otherBool, anotherBool);
	console.log('\n');
});

// null
(function showNull() {
	console.log('--- null');

	var a = null;

	console.log('a = ', a);
	console.log('typeof a = ', typeof a);
	console.log('\n');
});

// undefined
(function showUndefined() {
	console.log('--- undefined');

	var b;

	console.log('b = ', b);

	b = null;

	console.log('b after assignment = ', b);
	console.log('\n');

	console.log('undefined = ', undefined)
	undefined = 'something else';
	console.log('undefined after assignment = ', undefined);

	function doSomething(undefined) {
		console.log('inside doSomething', undefined);
	}

	doSomething();
});

// type casting
(function typeCasting() {
	console.log('--- type casting');

	var result = '1' + 2 + false;
	var otherResult = 1 + 2 + '3';
	var anotherResult = 1 + true + '4';

	console.log('"1" + 2 + false = ', result);
	console.log('1 + 2 + "3" = ', otherResult);
	console.log('1 + true + "4" = ', anotherResult);
})();
