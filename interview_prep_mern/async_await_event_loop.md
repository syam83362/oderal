q1. console.log("A");
console.log("B");

ans - A B
reason - syncronous code runs line by line

q2. console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

ans - A C B
reason  - syncronous code goes to call back queue and then A logs out then setTimeout goes and it will goes into the macro tasks then the remaining code is sync one after that the remaining macro task code is execited

q3. console.log("A");

Promise.resolve().then(() => console.log("B"));

console.log("C");

ans - A C B
reason - the sync code runs then the promise is goes into the micro task queue then remaining sync code runs finally the call  back is empty so that promise will get executed

q4. console.log("A");

Promise.resolve().then(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));

console.log("D");

ans - A D B C
reason - as usuall the sync code -> promisess are set to the micro task queue then the remaining sync code

q5. async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();
console.log("C");

ans - A C B
reason - the function goes to call stack then its sync code executes then await is there will stops the execution of the function only the remaining sync executes then the micro task code executes

q6. async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");

ans - C A D B
reason - sync -> added to the micro task queue then again sync then promise

q7. console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

ans - A D C B
reason - first sync code then micro task code then only macro task code will get prints

q8. console.log("A");

async function test() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

test();

Promise.resolve().then(() => console.log("D"));

console.log("E");

ans - A B E D C
reason - then sync code first then micro task queue added the 2 promisess first resolved .then will executes then the remaining ones executes

q9. async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

test();

console.log("D");

ans - A D B C
reason - first sync code then the B and C are added to the micro task queue then D logs then in order the B then C logs out

q10. console.log("A");

async function foo() {
  console.log("B");

  await Promise.resolve();

  console.log("C");
}

Promise.resolve().then(() => console.log("D"));

foo();

console.log("E");

ans - A E B D C
reason - first sync code runs 'A', then the promise will set it to the microtask and the 'E' logs then foo is added to call stack then the sync code of 'B' logs then  there is nothing in the call stack so the micro task queue is executes the first in the queue is 'D' it logs then 'C'