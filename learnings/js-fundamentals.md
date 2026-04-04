type of null returns object and type of undefined returns undefined

### type coercion

javascript automatically converts one datatype to another when needed

there are 2 types

1. implicit coercion(js does it)

"5" + 2 = "52"
"5" - 2 = 3

2. Explicit coercion(you does this)

Number("5") // 5
String(5) // "5"
Boolean(0) //false

+ is special 
if a string is involved -> concatinate
Else-> numeric addition

"2" + 2 = 22
2 + 2 = 4

-,*,/ 

always converts to number

"5" - 2 = 3
"5" * "2" = 10

Boolean conversion
true  → 1
false → 0

#### truthy and falsy
only 6 falsy values
false
0
""
null
undefined
NaN

Everyting is ELSE is falsy

#### == vs ===

=== strcit -> checks value and type too.
5 === "5" → false

== Loose -> converts type before comparing

null == undefined → true
null === undefined → false

step by step example
[] → ""
false → 0
"" → 0
0 == 0 → true

![] → false
[] == false → true

step by step

[] == false
"" == 0
0 == 0
true

Objects and arrays comparison

onjects and arrays are  compared by reference, not value

let a = [1,2];
let b = [1,2];

a == b → false
a === b → false

because different memory locations

let a = [1,2];
let b = a;

a === b → true

weired javascript casess

case -1
[] + []
→ "" + "" → ""

case-2
[] + {}
→ "" + "[object Object]"
→ "[object Object]"

case-3
{} + []
+[] → 0

case-4
1 < 2 < 3
1 < 2 → true
true < 3 → 1 < 3 → true

case-5
3 > 2 > 1
3 > 2 → true
true > 1 → 1 > 1 → false

#### NaN
NaN == NaN -> false
why?
NaN = invalid number
js treat every NaN as unique

Number.isNaN(NaN) → true
because it is a number

#### Double Not (!!!)
used to convert to boolean
!!"hello" → true
!!"" → false
!!0 → false

[1,2] + [3,4]
js converts this arrays into strings 
"1,2" + "3,4" = "1,23,4"

#### remenber these fully

[] → truthy
"" → falsy

null == undefined → true
null == 0 → false

[] + {} → "[object Object]"
{} + [] → 0

null == undefined → true
null == anything else → false

#### pre and post increment

x++ --> use first, then increase (post increment)

let x = 5;
console.log(x++); // 5
console.log(x);   // 6

returns old value
then update

pre increment

++x --> increase first,then use (pre increment)
let x = 5;
console.log(++x); // 6
console.log(x);   // 6

returns new value immediately


Golden Rule (Must Remember)

👉 x++ → “Give current, then increase”
👉 ++x → “Increase, then give”

