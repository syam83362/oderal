the event loop

it has four phasess of execution 

1. call stack --> stacking the functions  as they are called and popping them off when they return (LIFO - last in first out)

2. web apis/ node apis --> these lives in outside the js engine. when you call setTimeout, make an http request, or interact with Dom, the browser (or node.js ) takes over that task so the stack stays clear

3. the call bacl queue --> when a web api finishess (like a timer hitting zero), it sends the call back function here to wait

4. the Micro task Queue --> A vip Queue for high priority tasks, specifically Promisess and MutationObserver

the priority rule

console.log("Start");

setTimeout(() => {
  console.log("Timeout (Callback Queue)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask Queue)");
});

console.log("End");

The Output:

Start

End

Promise (Microtask Queue) — Even though the timeout was 0ms, the promise jumps the line!

Timeout (Callback Queue)


#### always catious
If you write a "heavy" synchronous loop (like calculating pi to a billion digits) on the Call Stack, the Event Loop cannot pull tasks from the queues. This means:

The UI cannot rerender.

Buttons become unresponsive.

The browser eventually shows the "Page Unresponsive" popup.

### promisess

what is promise 

the promisess are objects that represents a future result(sucess or failure)

states : pending - initial
         Fulfilled - sucess
         Rejected - error

example 
const p = new Promise((resolve, reject) => {
  resolve("Done");
});

consuming a promise

p.then((data) => {
  console.log(data);
});

#### Key Point

.then() always goes to microtask queue
even if promise is already resolved

#### what is async/await

asunc/await is just a syntatic sugar over promisess
it makes async code look like synchronous code

##### without async/await

Promise.resolve("Hello")
  .then((data) => console.log(data));

##### with async/await

async function test() {
  const data = await Promise.resolve("Hello");
  console.log(data);
}
test();


what does async do

async function test() {}

if we write like this it will become

return Promise.resolve(value);

async function test() {
  return "Hi";
}

test().then(console.log); // Hi

##### what does await do

await:
pausess the execution
waits for the promisess to resolve
then continuoues execution

await Promise.resolve();

Promise.resolve().then(() => {
  // rest of the code
});

code after await goes to micro task

async function test() {
  console.log("A");

  await something;

  console.log("B");
}

await splits the function into 2 parts
it internally becomes

console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

the difference

-- syntax --
-- promise --> .then(), .catch() --
-- async/await --> looks cleaner, looks synchronous --

Readability

async/await --> easier to read and maintain
Promisess --> chanining can get messey

error handiling 

we for promisess we use .catch()
for async and await we use try-catch

execution 

no difference 
both use micro task and event loop

debugging 

async/await --> easier
Promisess --> harder(nested chainings)

Does await block the thread?

👉 ❌ NO
👉 It only pauses that async function, not entire JS