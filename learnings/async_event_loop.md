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