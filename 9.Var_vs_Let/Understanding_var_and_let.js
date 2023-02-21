  var a="hello";
console.log("Value of a declared outside of the block is:",a);
let b=1;
console.log("Value of b declared outside of the block is:",b);
/*
here a and b will act as global as both a and b are neither 
declared in block or function so they can be accessed from any
where within the program*/

{
	a="world";
	console.log("Value of a declared inside of the block is:",a);
	b=3;
	console.log("Value of b declared inside of the block is:",b);
	/*
	redeclaration of variable is not allowed with let keyword
	let b=4;
	console.log(b);*/
	let c=6;
	var d=7;
	console.log("Value of c declared inside of the block is:",c);
	console.log("Value of d declared inside of the block is:",d);
}
/*
this will give error cause c is declared using let keyword 
and it is declared in scope so it cannot be accessed outside 
the scope.

console.log(c);

*/

//where as d which is declared using var keyword is not block
//specific can be used outside of the block
console.log("Value of d declared outside of the block is:",d);


function test(x)
{	
	
	console.log("initial value is",x);
	x="hey"
	console.log("value after change is:",x);
	var e="hello"
	let f=9;
	console.log(e);
	console.log(f);
}
//test();
/*
so this will give error cause e is declared inside a function 
with var keyword and since var keyword is given inside function
it will give error outside the function block if tried to access
it cause var is function specific
console.log(e);

*/

/*
here althought let is no function specific but function start
with open({)and end with close(}) and that will act as a block 
so if try to access variable declared with let outside the function
will give error

console.log(f);
*/
test(a);//so if we will pass the variable in function it will be 
//passed with a concept of pass by value and not reference.
test(b);
console.log(a);
console.log(b);
