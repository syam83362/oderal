#### scope = where a variable can be accessed

think of it like visibillity of variables i your code

Globle scope
variables declared outside any function /block

let a = 10;

function test() {
  console.log(a);
}

test(); // 10

a is accessble everywhere.

Intervview Note
Global variables stay in memory for the entire program
overusing them  = bad practice(memory + bugs)

function scope

variable declared inside the function
function test() {
  let b = 20;
  console.log(b);
}

test(); // 20
console.log(b); // ❌ Error

b is available inside the test

bolck scope (let & const)

blocks = {} (is, while, for etc...)
let and const are block scoped

#### var vs let vs const
{
  var a = 10;
  let b = 20;
}

console.log(a); // ✅ 10
console.log(b); // ❌ Error

var is Not block scoped , only function scoped

here a bit explanation 
the var is function scoped, the js engine looks for var to attach to a function if no function found it attached to the gloal scope to the window object and available gloally
the let is a block scoped so it cannot available outside

#### Lexical scope
Scope is determined by where code is written, NOT where it is called

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer(); // 10

inner() can access the outer() variables

#### shadowing
let a = 10;

function test() {
  let a = 20;
  console.log(a);
}

test(); // 20

inner variable shadows the outer variable


#### illegal shadowing
let a = 10;

{
  var a = 20; // ❌ Error
}

you cannot shadow let using var in the same scope

the var is hoisted at the top level due to no function here it goes stright to the global declaration there already the let varible with same name due to this conflict the error comes out

if they both are let or they both are var scenrio changes

#### TDZ
the temperal dead zone is mainly for the const declaration variables if a variable is declared and initilized by the const it should been modified again

here what happens the variables declared with var and const are added to the TDZ. and hoisted as the uninitialized but for the var it is hoisted as the undefined as soon as the variable is declared
now back to the TDZ after declaration the uninitialized is gone once the exection reaches the line where it is initialized untill then means in the time frame between the TDZ creation and TDZ ends ( where the variables initialized ) is a temaral dead zone in this limit of zone if we try to access the variables it throws an reference error

#### Loop Scope Theory
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

here due to the setTimeout the remaining code will completes its execution and the output is 3 3 3
what actually happening here is
the variable of var is set to globally because there is no function here
then its starts the execution while the setTimeout is an Macro task which will holds the execution  quite some time
the remaining code completes the execution and updates the value of i and it becomes 3 then the log statement looking at the same because of the gloal variable(window varible) the output is 3 3 3

practice questions

let a = 10;

function test() {
  console.log(a);
  let a = 20;
}

test();

ans - referrence error due to TDZ in block

var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();

ans - undefined due to function scope of var

let a = 10;

{
  let a = 20;
  {
    let a = 30;
    console.log(a);
  }
}

ans - 30 closest scope variable wins

for (var i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 0);
}

ans - 2 2

for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 0);
}

ans - 0 1