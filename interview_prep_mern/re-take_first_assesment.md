1. console.log(typeof undefined === typeof null);
ans - false

2. console.log(NaN === NaN);
ans - false

3. console.log([] == ![]);
ans - false

4. console.log(Boolean([]));
ans - true

5. console.log("5" + 3 - 2);
ans - 51

6. console.log(1 < 2 < 3);
ans - true

7. console.log(3 > 2 > 1);
ans - true

8. console.log(typeof []);
ans - object

9. console.log("10" - "4" - "3" - 2 + "5");
ans - "15"

10. console.log([] + {});
ans - "{}"

11. Why is NaN !== NaN in JavaScript?
actually i don't understand the question i assume that why they are not equal.
the reason behind is it is an number that can be assigned and that we can't gaurentee that these are equal based on future predictions

12. Explain how JavaScript handles comparison in: [] == false
due to the type coercion the empty array becomes "" and false becomes 0, then the "" becomes true and it is eventually 1 and the comparision values between 1 and 0 are false

13. Difference between:
null == undefined
null === undefined

the null == undefined are true because the values are undefined and for the === the type of returns the null for object and undefied as undefied so that they return false for strict

14. What is implicit vs explicit type coercion? Give examples.
the implicit coercion will converts the type of an object by the javascript by itset like console.log("2"+2) is 22
the expllicit coercion will converts the type of an object by the instruction like number("2") will convert into the number 2.

15. Explain memory behavior in:
let a = {x:1};
let b = a;
b.x = 2;
console.log(a.x);

the object variables both refer to the same memory point or a location and the changee in b.x tends to change the a.x as well
the output is 2

16. console.log("2" + 2 - "2");
ans - 2

17. console.log(true == "1");
console.log(false == "0");
ans - true
true


18. let a = {};
let b = {};
console.log(a == b);
console.log(a === b);

ans - true, false

19. console.log(!!null);
console.log(!!undefined);

true, false

20. console.log([1,2] + [3,4]);

ans - [4,6]

21. Check Palindrome

Input: "madam" → true
Input: "hello" → false

function palindrome(input){
    reverse_input = input.split("").reverse().join
    if(input == reverse_input) return true
}

palindrome("madam")

22. Find second largest number in array

Input: [10, 5, 8, 20, 3] → Output: 10

function second_largest(input){
    sorted_input = input.sort();
    console.log(sorted_input[1]);
}

23. Flatten array (1 level only)

Input: [1, [2,3], 4] → Output: [1,2,3,4]

temp = input.split(",");
output = temp.join(",")

24. console.log({} + []);
console.log([] + {});

to differencite that these are different objects concatenated together