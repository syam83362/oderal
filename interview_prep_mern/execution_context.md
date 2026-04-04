1. console.log(a);
var a = 10;

ans - undefined
reason - var is hoisted undefined before initialization

2. let a = 10;

function test() {
  console.log(a);
  let a = 20;
}

test();

ans - reference error
reason - due to TDZ the value is not available to read inside of the block

3. function test() {
  console.log(a);
  var a = 5;
  console.log(a);
}

test();

ans - undefined 5

4. let a = 1;

function outer() {
  let a = 2;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn();

ans - 2
reason - let is block scoped and also closure will only have the updated value

5. function counter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const c = counter();

console.log(c());
console.log(c());
console.log(c());

ans - 0 1 2
reason - this is post increment first returns and then next updates

6. function outer() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

const fn = outer();
x = 50;
fn();

ans - 10
reason - the let is block scoped and also the closure is only variable is inside of the function block and its value is 10

7. function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  x = 30;
  return inner;
}

const fn = outer();
fn();

ans - 30
reason - the clouser keeps track of the live value and the value is updated to 30

8. for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

ans - 3 3 3
reason - the loop starts and due to setTimeout execution delay the values are updated and the final updated valued is printed three times

9. for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

ans - 0 1 2 
reason - let creates new binding per iteration

10. for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 0);
  })(i);
}

ans - 0 1 2
reason - here the value remmbers by j everytime i updates and stores and logs in correct order

11. let x = 10;

function test() {
  console.log(x);

  if (true) {
    let x = 20;
  }
}

test();

ans - 10
reason - This line executes before the block
The inner let x = 20 is not in scope here

12. function test() {
  console.log(a);
}

var a = 10;

function test2() {
  var a = 20;
  test();
}

test2();

ans - 10
reason - test was defined in global scope
So it uses global a = 10


13. function create() {
  let count = 0;

  return {
    inc: function () {
      count++;
    },
    log: function () {
      console.log(count);
    }
  };
}

const a = create();
const b = create();

a.inc();
a.inc();
b.inc();

a.log();
b.log();

ans - 2 1
reason - the a closure is called twice and incremented while b is once only called