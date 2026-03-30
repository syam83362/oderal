#### javascript fundamentals

1. what will be the output?
console.log(typeof NaN);
###### the NaN is also a number

2. console.log(0.1 + 0.2 === 0.3);
#### due to floating point precession it is false value

3. Which one is NOT a primitive type?
a) string
b) number
c) object
d) boolean
ans - c

4. let a = null;
console.log(typeof a);
##### the type of null is object


5. Which statement is true?
a) == checks value only
b) === checks value and type
c) == checks value and type
d) Both are same

ans - b

6. console.log([] + []); output?
#### arrays converts to strings "" + "" = ""

7. What is the output?
console.log("5" - 3);

a) "2"
b) 2
c) NaN
d) error

ans - b

8. What does isNaN("hello") return?
##### true

9. Which is falsy?
a) "0"
b) []
c) 0 -> is falsy
d) "false"

10. Output?
console.log(true + true);

a) 2
b) true
c) NaN
d) undefined

ans - a

11. Difference between null and undefined

the null is assigined by the developer to assigin the value in the future
while the undefined is assisned to the variable if we not intialize any value to the variable

12. What is type coercion? Give one example

javascript has an ability to convert the data type of a varible or an object during the runtime
example console.log("2"+2) the output will be 22 due to type coercion the string will convert into the number
+ prefers concatination

13. Explain var, let, const differences
the var is function scoped can be redeclared and reassgisned and due to hoisting, if we call it before the declarion of the variable it gives the undefined
while for the let and const they are declared and assisgned once and no further, they throws the referrence error if we call the variable before declaration

#### ❌ let can be reassigned (you said cannot)
#### ❌ const cannot be reassigned (correct, but not clearly stated)
#### ❌ Missing block scope explanation

14. What are truthy and falsy values? List any 5 falsy values

the truthy and falsy are the values in javascript thay defined to true or false 
like an empty string, empty array, false it self are falsy and a number or a string and true are the truthy values

###### Correct falsy values:

###### false
###### 0
###### ""
###### null
###### undefined
###### NaN

15. What is the difference between pass by value and pass by reference?
this explanation is week
the function parameters if they are passed the direct values they are pass by value and if they are refferd by any variable or any objct they pass by reference
##### Primitives → pass by value
##### Objects/arrays → reference (but technically still passed by value of reference)



Find the output and explain briefly.
16. let x = "10";
let y = 5;
console.log(x + y);

the output will be 15, due to type coercion the 10 converts into number
##### the output is 105 due to string concatination

17. console.log([] == false);
true, due to the empty array is falsy

##### the array becomes into "" and the false becomes the 0 and the output is true

18. console.log(null == undefined);
console.log(null === undefined);

true
false
because the in first case the comparision is done on the values 
in second term the comparision is between value and the object itself too

19. let a = [1,2];
let b = [1,2];
console.log(a == b);
console.log(a === b);

here first is true and second is false
because the in first case the comparision is done on the array values 
in second term the comparision is between value and the array objects

##### Arrays are compared by reference, not value

20. console.log(!!"");
console.log(!!"hello");

the empty string is falsy and it negated twice by not symbol and it is false at the end
the hello string is truthy and it negated twice by not symbol and it is true at the end

21. Reverse a string
Input: "hello"
Output: "olleh"

input_string = "hello"
output_string = input_string.split("").reverse().join("")
console.log(output_string)

to reverse a string i have converted the string to array using the split and then used the reverse function of the array and joined it using the join to convert the array into string

22. Count vowels in a string
Input: "javascript"
Output: 3

let count = 0;
for (let char of input) {
    if ("aeiou".includes(char)) count++;
}



23. Remove duplicates from an array
Input: [1,2,2,3,4,4,5]
Output: [1,2,3,4,5]

let input = [1,2,2,3,4,4,5];
let output = []
for(let i=0;i<input.length;i++){
    if(output.indexOf(input[i]) === -1)
    output.push(input[i])
}

console.log(output)

the indexOf fucntion the index of the vales in an array if the value does not exsisted it returns the -1 then we push those values 