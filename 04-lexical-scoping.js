/*

	Lexical scoping, scope inheritance and closures in JavaScript

	- also known as "function scoping"
	- lexical scoping !== block scoping

*/

console.log('--- Lexical scoping, scope inheritance and closures in JavaScript\n');

(function showFunctionScoping() {

	console.log('--- JavaScript lexical scoping\n');

	var foo = 1;

	console.log('foo before running bar() = ', foo);

	function bar() {
		var foo = 2;
	}

	bar();

	console.log('foo after running bar() = ', foo);

	if (true) {
		var foo = 3;
	}

	console.log('foo after reassigning in block scope = ', foo);
});

(function showScopeInheritance() {

	console.log('--- JavaScript scope inheritance\n');

	function doSomething() {
		var fact = 'variables defined in outer scope are available in child scope';

		function showFact() {
			console.log(fact);
		}

		showFact();
	}

	doSomething();

});

(function showClosures() {

	console.log('--- JavaScript closures\n');

	function addTo(x) {
		var result = x;
		return function addToResult(y) {
			return result += y;
		}
	}

	var add = addTo(10);

	console.log(add.toString());
	console.log();

	console.log('10 + 1 = ', add(1));
	console.log('11 + 2', add(2));
	console.log('13 + 10', add(10));
})();
