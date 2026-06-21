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

let scores = [45, 80, 95, 100, 60, 75]

for(let i=0; i<scores.length; i++){
  if(scores[i] === 100){
    
    console.log("Target Found!",scores[i]);
    break;
  }
}