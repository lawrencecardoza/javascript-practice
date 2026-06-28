// 1. Print Hello World

// console.log('Hello World');

// 2. Even/Odd

// for(let i=1; i<=20; i++){

//   if(i % 2 === 0){
//     console.log(`Even`, i)
//   }else{
//     console.log(`Odd`, i)
//   }
// }

//3. Largest of 3 numbers

// const num = [a=10, b=20, c=30];

// if(a > b && a > c ){
//   console.log("A");
// } else if (b > a && b > c){
//   console.log("B");
// } else {
//   console.log("C")
// }

// 4. Calculator

// function calculator(num1 ,operator, num2){
//   let result;

//   if(operator === "+" ){
//     result = num1 + num2;
//   }else if(operator === "-" ){
//     result =  num1 - num2
//   }else if(operator === "/"){
//     result = num1 / num2
//   }else{
//     result = num1 * num2
//   }

//   return result;
// }

// console.log(calculator(5, '+', 5))
// console.log(calculator(5, '-', 3))
// console.log(calculator(5, '/', 3))
// console.log(calculator(5, '*', 3))

// 5. Multiplication Table

// let num = 0;
// for(let i=1; i<=20; i++){

//   if(i % 2 === 0){
//     num++
//     console.log(`2 * ${num} = ${i}`)
//   }
// }

//6. Factorial

// factorial = (n) => {
//   let result = 1
//   for (let i = 1; i <= n; i++) {
//     result = result * i
//   }
//   return result
// }

// console.log(factorial(5))

// 7. Prime Number

// checkprime = (n) => {
//   let isPrime = true

//   if (n === 1 || n < 1) {
//     return `1 or negative number is a not prime number`
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) 
//     isPrime = false
//   }

//   if (isPrime) {
//     return `${n} is Prime Number`
//   } else {
//     return `${n} is not a Prime number`
//   }
// }

// console.log(checkprime(2))

// 8. Palindrome Number

// isPalindrome = (str) => {
//   let length = str.length;
//   for(let i=0; i<length; i++){
//     if(str[i] !== str[length - 1 - i])
//       return false;
//   }
//   return true

//   // if(str === str.split('').reverse().join(''))
//   //   return true
//   // else
//   //   return false
// }

// console.log(isPalindrome("lawwal"))

// 9. Reverse Number
// let num = 987654321

// reverseNuumber = (num) => {
//    let reverse = 0;
//    while (num > 0){
//       let temp = num % 10;
//       num = Math.floor(num / 10);
//       reverse = reverse * 10 + temp
//    }
//    return reverse;
// }

// console.log(`resverse num ${num} is ${reverseNuumber(num)}`)


// 10. Fibonacci

// let n1 = 0, n2 = 1;
// console.log(n1);
// console.log(n2);

// for(let i=3; i<=10; i++){
//   let n3 = n1 + n2;
//   console.log(n3);
//   n1 = n2;
//   n2 = n3;
// }

