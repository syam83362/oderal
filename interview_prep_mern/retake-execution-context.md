1. let x = 10;

function test() {
  console.log(x);

  if (true) {
    console.log(x);
    let x = 20;
  }
}

test();

ans - 10 Reference error
reason - new block TDZ error


2. var a = 10;

function test() {
  console.log(a);
  var a = 20;

  function inner() {
    console.log(a);
  }

  inner();
}

test();

ans - undefined 20
reason - function scope hoisted to function scope so the undefied first then 20

3. function outer() {
  let a = 10;

  return function () {
    a++;
    console.log(a);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();

ans - 11 12 11 13
reason - post increment --> Increment happens first, then log

4. function outer() {
  let obj = { value: 10 };

  return function () {
    obj.value++;
    console.log(obj.value);
  };
}

const fn = outer();

fn();
fn();
fn();

ans - 11 12 13
reason - post increment --> Increment happens first, then log

5. function test() {
  let count = 0;

  return function () {
    console.log(count++);
  };
}

const fn = test();

fn();
fn();
fn();

ans - 0 1 2
reason - clouser remembers the value and same clouser and post increment

6. function test() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const a = test();
const b = test();

console.log(a());
console.log(a());
console.log(b());
console.log(a());

ans - 1 2 1 3
reason - clouser remembers the value and same clouser and pre increment --> increments then returns

7. for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

console.log("done");

ans - done 3 3 3
reason - the loop complets while the setTimeout is at task Queue the synchronous code runs

8. for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

console.log("done");

ans - done 0 1 2
reason - the loop complets while the setTimeout is at task Queue the synchronous code runs

9. let a = 1;

function outer() {
  let a = 2;

  function inner() {
    console.log(a);
  }

  return inner;
}

let fn = outer();

a = 100;

fn();

ans - 2
reason - the closet scope wins which is 2

10. var a = 10;

function foo() {
  console.log(a);
}

function bar() {
  var a = 20;
  foo();
}

bar();

ans - 10
reason - the a = 10 is gloally set and the function foo is also not inside any scope to shadow so it logs the 10

11. function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  x = 50;

  return inner;
}

const fn = outer();

let x = 100;

fn();

ans - 50
reason - Closure holds reference
x updated to 50 before return

12. function createCounter() {
  let count = 0;

  return {
    inc: function () {
      return ++count;
    },
    dec: function () {
      return --count;
    }
  };
}

const c1 = createCounter();
const c2 = createCounter();

console.log(c1.inc());
console.log(c1.inc());
console.log(c2.inc());
console.log(c1.dec());
console.log(c2.dec());

ans - 1 2 1 1 0
reason - the pre incerement and decrement the values are first updated then returned