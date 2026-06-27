// let js = 'amazing'
// if (js === 'amazing');
// // alert('hey')

// let num = 20 + 10 - 20 - 5
// console.log(num)

// //----------------------

// var name = "Lawrence";
// name = "Cardoza";

// console.log(name)// Cardoza

// // ------------------------

// const age = 22;
// age =  32;

// console.log(age)// error

// Standard if-else

// let login = true;

// if(login === true){
//   console.log("login");
// }else{
//   console.log("please login in ")
// }

let user = ''

// if(user.length === 0){
//   console.log("Enter your password");
// } else if (user.length >= 8){
//   console.log("Strong")
// }else{
//   console.log("weak")
// }

//Ternary

// const message = user.length === 0 ? 'Enter your password' : user.length >= 8 ? 'Strong' : 'Weak' // The final default "else"

// console.log(message)

// // for(let i=0; i<prices.length; i++){
// //   console.log(prices[i])
// // }

// let prices = [10, 25, 5, 40, 15]

// for (let i = 0; i < prices.length; i++) {
//   // Check if the current price is greater than or equal to 20
//   if (prices[i] >= 20) {
//     console.log(prices[i])
//   }
// }

// let numbers = [1, 4, 7, 12, 19, 20, 23];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i])
//   }
// }

// let count = 0;

// let transactions = [50, -10, 100, -25, 30, -5];

// for(let i=0; i< transactions.length; i++){
//   if(transactions[i] <= 0){
//     count++;
//     console.log(transactions[i])
//   }
// }
// console.log(`count no of ${count}`)

// -------------------------------

// let count = 0

// for(let i=1; i<=30; i++){
//   if( i % 3 === 0){
//     count++
//     console.log(`Multple of 3 * ${count} = ${i}`)
//   }
// }

// let names = ['Alex', 'Lawrence', 'Sam', 'Christina', 'Jo', 'Oliver']

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 5) {
//     console.log(names[i])
//   }
// }

// let inputs = ["Valid Data", "", "More Data", "", "Final Data"];
// let cleanInputs = []; // Your container to store valid strings

// for(let i=0; i < inputs.length; i++){
//   if(inputs[i] !== ""){
//     cleanInputs.push(inputs[i])
//   }
// }
// console.log(cleanInputs)

// let scores = [45, 80, 95, 100, 60, 75]

// for(let i=0; i<scores.length; i++){
//   if(scores[i] === 100){

//     console.log("Target Found!",scores[i]);
//     break;
//   }
// }

// let grades = [55, 80, 42, 90, 58];

// for(let i=0; i< grades.length; i++){
//   if(grades[i] < 60){
//     grades[i] += 5;
//     console.log(grades[i])
//   }
// }
// console.log(`Total grade ${grades}`)

// for(let i=1; i<=15; i++){
//   if(i === 10){
//     continue;
//   }
//   console.log(i)
// }

// let users = [
//   { name: 'Alice', role: 'user' },
//   { name: 'Lawrence', role: 'admin' },
//   { name: 'Bob', role: 'user' },
// ]

// for(let i=0; i<users.length; i++){
//   if(users[i].role === "admin"){
//     console.log(`Welcome Admin ${users[i].name}`);
//   }else{
//     console.log(`Welcome User ${users[i].name}`)
//   }
// }

// let cart = [
//   { item: 'Laptop', price: 1000 },
//   { item: 'Mouse', price: 50 },
//   { item: 'Keyboard', price: 80 },
// ]

// let totalPrice = 0

// for (let i = 0; i < cart.length; i++) {
//     totalPrice += cart[i].price
// }

// console.log(totalPrice)


// let warehouse = [
//   { product: "Laptop", category: "electronics", quantity: 5 },
//   { product: "Desk Chair", category: "furniture", quantity: 12 },
//   { product: "Smartphone", category: "electronics", quantity: 8 },
//   { product: "Table", category: "furniture", quantity: 3 }
// ];

// let totalElectronics = 0; // Your tracker for electronics only

// for(let i=0; i<warehouse.length; i++){
//   if (warehouse[i].category === 'electronics') {
//     totalElectronics += warehouse[i].quantity
//   }
// }

// console.log(totalElectronics)

// ---------------------------------------

// function multiplyByTwo (num) {
//   return num * 2;
// } 

// console.log(multiplyByTwo(2));


// function checkAge(age){
//   if(age >= 18){
//     return "Allowed"
//   }else{
//     return "Not Allowed"
//   }
// }

// console.log(checkAge(18));


// function findMax(numberArray){

//   let max  = numberArray[0]

//   for(let i=0; i<numberArray.length; i++){
//     if(numberArray[i] > max){
//       max = numberArray[i];
//     }
//   }
//   return max
// }

// console.log(findMax([2,3,4,5,6]))

// --------------------------------------------

// function convertToPercentages(decimalArray) {
//   let result = []

//   for (let i = 0; i < decimalArray.length; i++) {
//     result.push(decimalArray[i] * 100);
//   }
//   return result;
// }

// console.log(convertToPercentages([0.1,0.2,0.3,0.4]))

// -----------------------------------------------------------


// function getNotification(userAraay){
  
//   let name = [];

//   for(let i=0; i<userAraay.length; i++){

//     if (userAraay[i].hasNotifications === true) {
//       name.push(userAraay[i].name);
//     }
//   }
//   return name
// }

// const result = getNotification([
//   { name: 'Alice', email: 'alice@test.com', hasNotifications: true },
//   { name: 'Bob', email: 'bob@test.com', hasNotifications: false },
//   { name: 'Charlie', email: 'charlie@test.com', hasNotifications: true },
// ])

// console.log(result)


// const p = document.querySelector('#user-role')
// p.addEventListener("click",() => {

// })
