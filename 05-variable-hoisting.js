/*

	Variable hoisting in JavaScript

*/

console.log('Variable hoisting in JavaScript\n');

(function showVariableHoisting() {

	console.log('--- variable definition');
	console.log();

	console.log('foo before declaration = ', foo);

	foo = 2;

	console.log('foo right before declaration = ', foo);

	var foo = 'bar';

	console.log('foo after declaration = ', foo);


	console.log();
	console.log('--- function definition');
	console.log();

	console.log('bar before declaration = ');
	console.log(bar);
	console.log('returns: ', bar());

	function bar() {
		return 'baz';
	}

	console.log('bar after declaration = ');
	console.log(bar);
	console.log('returns: ', bar());

})();
