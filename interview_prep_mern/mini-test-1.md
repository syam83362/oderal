q1. console.log([] == "");
ans - true
reason - the [] will become "" due to comparision ==, so "" == "" -> false == false -> 0 == 0 ==> true

q2. console.log([] == false);
ans - true
reason [] will become "" and it is a false then false == false, -> 0 == 0 ==> true

q3. console.log(null == undefined);
ans - true
it is special case the null in losse equality equals to undefined and in strict it is false

q4. console.log(null == 0);
ans - true
#### this was the one
null == undefined → true
null == anything else → false

q5. console.log(!!"0");
ans - true
the empty string is false but here the string is not empty it has 0 so it is true and the true is double negeted so it goes to false and againe becomes true

q6. console.log("10" - 5 + "5");
ans - "55"
the evaluation starts from left ro right so, "10" -5 the string becomes number and it is a - operaator so subtraction will takes place 10-5 is 5 and then the number 5 will become string due to + sign then concatenation happes "55"

q7. console.log(true + false);
ans - 1
true become number 1 and false become 0 then 0 + 1 is 1

q8. console.log([1] == true);
ans - true
here arrays do not convert to boolean directly it become prrimitive (string/number)
"1" == true
"1" == 1
1 == 1
true

q9. console.log([] + []);
ans - ""
the addition of these two, they become "" + "" and by string concatination the result is ""

q10. console.log({} == {});
ans - false
here on=bjects and arrays are always false because of object referencing
[] == [] is false and also [] === [] is false
{} == {} is false and also {} === {} is false

#### final 5 questions
q1. console.log(null == false);
ans - false
null with anything else is alwas false

q2. console.log([] == 0);
ans - true
[]-> "" -> false-> 0
0 == 0
true

q3. console.log({} === {});
ans - false
objects and arrays in both strict and loose compares only references so the output will be false

q4. console.log([0] == false);
ans - false
[0] -> "0"
"0" == false
true == false
1 == 0
false

q5. console.log("5" + 3 - 2);
ans - 51
"5" + 3 -> "5" + "3" concatination happens ==> "53"
negative operator "53" becomes number
53 - 2 = 51