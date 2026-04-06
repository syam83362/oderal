#### arrays
 the arrays are objects with indexed keys
 they are referenced types
 Methods like 
    map, filter, reduce --> functional (return new array)
    forEach --> does NOT  return anything
    sort --> mutates original array

here the sort function will converts the numbers into strings and sorts lexographically

const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort(); 
console.log(fruits); // ['Apple', 'Banana', 'Orange']

const numbers = [1, 10, 2, 21];
numbers.sort();
console.log(numbers); // [1, 10, 2, 21] 
// Wait, what? "10" comes before "2" because "1" < "2" in string logic.

const numbers = [40, 100, 1, 5, 25];

// Ascending Order
numbers.sort((a, b) => a - b); // [1, 5, 25, 40, 100]

// Descending Order
numbers.sort((a, b) => b - a); // [100, 40, 25, 5, 1]

How the Logic Works:
If the result is negative ($< 0$): a comes before b.
If the result is positive ($> 0$): b comes before a.
If the result is zero ($0$): No change in order.

#### shallow copy and deep copy

the shallow copy only copies the first level of keys or elements
qhile deep copy will copies till nested levels

###### shallow copy example
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };

obj2.b.c = 10;

console.log(obj1.b.c);

here the output will be 10, because the updated value is 10
==> here by the shallow copy only copies the first level only and the nested ones are memory locations copies so that c is same memory locations for both objects

###### deep copy example
const deepCopy = structuredClone(obj);
the function structuredClone will make a deep copy