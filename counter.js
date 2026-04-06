// function counter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const c = counter();

// c()
// c()


// function BankAccount(){
//     let balance = 10000;

//     return {
//         getBalance : ()=> balance,
//         deposit : (amt)=> balance+amt
//     };
// }

// const acc = BankAccount();
// console.log(acc.getBalance())
// console.log(acc.deposit(5000))
// console.log(acc.balance)

// function multiply(x){
//     return function(y){
//         return x*y;
//     };
// }

// const double = multiply(2)
// console.log(double(5))


// const arr = [10,2,5]

// console.log(arr.sort())

// in the arrow functions if a single expression is there then it will be utomatically a return statement 
// if it is not one statement the arraow function expects the return function