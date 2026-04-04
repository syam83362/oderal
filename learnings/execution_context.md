it's the environment in which javascript code runs

whenever js code runs, it creates an execution context

Types of execution context
1. Global Execution context (GEC)
    created when program starts
    Only one exists
2. Function Execution Context (FEC)
    created whenever a function is called

two phasess of execution context
1.  Memory creation phase
    var ---> undefined
    let/const ---> in TDZ
    functions ---> full function stored

2. Execution Phase
    code runs line by line
    values get assisgned
    functions get executed


### Closure
a closure is when a function "remembers" variables from its outer scope even after that scope is gone

the inner carries a reference to its lexical environment
that environment is destroyed
this prevents memory = closure

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn(); // 10

interview question

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const c = counter();

c(); // 1
c(); // 2
c(); // 3

count is preserved in closure each call updates the same memory


#### Multiple closures

function counter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

const c1 = counter();
const c2 = counter();

c1() //1
c2() //1
c1() //2
c2() //2

Each closure has its own independent memory

function BankAccount(){
    let balance = 10000;

    return {
        getBalance : ()=> balance,
        deposit : (amt)=> balance+amt
    };
}

const acc = BankAccount();
console.log(acc.getBalance())
console.log(acc.deposit(5000))
console.log(acc.balance) // undefined

balance is private
the function only returning the object without the balance variable so we can't acess to it

function factories

function multiply(x){
    return function(y){
        return x*y;
    };
}

const double = multiply(2)
console.log(double(5))

every function in javascript must return something if we don't return anything it defaultly returns the undefined


function outer() {
  let a = 10;

  return function inner() {
    console.log(a);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn2();

ans - 1 1

function test() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const a = test();
console.log(a());
console.log(a());

++count  // increment first → return new value
count++  // return old value → then increment
ans - 1 2

function test() {
  let x = 10;

  return function () {
    let x = 20;
    console.log(x);
  };
}

const fn = test();
fn();

ans - 20

for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

ans - 2 2

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  a = 20;

  return inner;
}

const fn = outer();
fn();

here i have learned a new thing a closure watches over a live link of a variable state that current value
the during the compile time value of the a is already updated to 20 so the when a function call happens its value is 20