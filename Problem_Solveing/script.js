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

factorial = (n)=> {
  let result = 1;
  for(let i=1; i<=n; i++){
    result = result * i;
  }
  return result;
}

console.log(factorial(5))


















