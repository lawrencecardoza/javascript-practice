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

// 11. Reverse String

// we solve this problem 2 way
// 1.split and reverse

// let string = 'Lawrence';

// reverseString = (str) => {

//    return str.split('').reverse().join('');
// }
// console.log(reverseString(string))

// 2.algorithm

// reverseString2 = (str) => {
//    let reverseStringresult = '';
//    for(let i=0; i<str.length; i++){
//       reverseStringresult = str[i] + reverseStringresult;
//    }
//    return reverseStringresult;
// }
// console.log(reverseString2(string))

// 12. Palindrome String

// stringPalindrome = (str) => {

//   let length = str.length

//   for(let i=0; i<length; i++){
//     if(str[i] !== str[length - 1 - i])
//     return false
//   }
//   return true

//   if(str === str.split('').reverse().join('')){
//     return true
//   }else{
//       return false
//   }
// }

// console.log(stringPalindrome("lawwal"));

// 13. Count Vowels

// let string = 'LAwrence'

// findVowel = (str) => {

//   let vowel = ["a","e","e","i","o"];

//   for(let i=0; i<str.length; i++){
//     return str.toLowerCase().split('').filter(v => vowel.includes(v)).length;
//   }
// }

// console.log(findVowel(string))

// 14. Count Characters

// countChar = (str) => {
//   return str.length
// }

// console.log(countChar("lawrence"));

// 15. Remove Spaces

// removeSpaces = (str) => {

// //   return str.split(' ').join('');
// return str.replace(/\s/g, '')

// }

// console.log(removeSpaces("Lawrence Cardoza Robert"))

// 16. Capitalize Words

// capitalizeWork = (str) => {

//   // return str.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1)).join('');

//   if (!str) return '';
//   return str
//     .split(' ')
//     .map((char) => {
//       if (char.length === 0) return char
//       return char[0].toUpperCase() + char.slice(1)
//     })
//     .join(' ')
// }

// console.log(capitalizeWork('Lawrence'))


// let num = 10;

// for(let i=1; i<=num; i++){
//   console.log(i)
// }

// Time Complex
// let num1 = 10
// for (let i = 1; i <= num1; i++) {
//   console.log(num1 - i + 1)
// }

// const num = 10

// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }


// Natural Number 
// console.time()
// // brute Solution Its take 9 sec
// let num = 5;
// // let result = 0;

// // for(let i=1; i<=num; i++){
// //   result = i + result;
// //   console.log(result)
// // }

// // optimize
// let sum = (num * (num + 1)) / 2
// console.log(sum)

// console.timeEnd()


//Factorial

// let num4 = 5;
// let sum = 1;

// for(let i=1; i<=num4; i++){
//    sum *= i
//   console.log(sum)
// }
