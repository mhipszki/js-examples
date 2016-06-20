/*

	Functions in JavaScript

	- first class citizens (every function is an object)

	topics

	- function definitions
	- function expressions
	- anonymous functions
	- factory functions
	- functions are objects

*/

console.log('--- Functions in JavaScript\n');

// function definitions

(function showFunctionDefinition() {
	console.log('fn before definiton & assignment = ', fn, '\n');

	function fn() {
		// a function definition
	}

	console.log('fn after = ', fn);
});

// function expression

(function showFunctionExpression() {
	console.log('otherFn before definiton & assignment = ', otherFn, '\n');

	var otherFn = function doSomethingElse() {
		// a function expression
		console.log('fn expression');
	}

	console.log(otherFn);

	console.log('otherFn after = ', otherFn);
});

// anonymous functions

(function showAnonymousFunctions() {
	var named = function namedFunction() {
		throw new Error('named function');
	}

	var anonym = function () {
		throw new Error('anonymous function');
	}

	console.log('named function: ');
	console.log(named);
	console.log('anonym function: ');
	console.log(anonym);

	var anonym2 = function () {
		(function () {
			throw new Error('really anonymous function');
		})();
	}

	// anonym();
	anonym2();
});

// factory functions (just a design pattern)

(function showFactoryFunctions() {
	function factory() {
		return function doSomething() {
			// do something
		}
	}

	var doItOnce = factory();
	var doItAgain = factory();

	console.log('first fn:', doItOnce);
	console.log('second fn:', doItAgain);
	console.log('first === second?', doItOnce === doItAgain);
});

// functions are objects

(function showFunctionsAreObjects() {
	function fn() {
		console.log('it is just a function, but also an object!');
	}

	fn.foo = 'bar';
	fn.bar = 'baz';

	console.log(fn);
	console.log('');

	fn();
})();
