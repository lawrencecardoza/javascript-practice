// const bookings = [];

// const createBooking = function(flightNum,numPassengers, price = 199 * numPassengers){
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     bookings.push(booking)
//     console.log(booking)
// }

// createBooking("LH123",3,)

// const flight = "LH123";
// const law = {
//     name: "lawrence",
//     passport: 12345678901
// }

// const CheckIN = function(flightNum,passenger){
//     flightNum = "LH231"
//     passenger.name = "Mr" || "Mrs" + passenger.name

//     if(passenger.passport === 12345678901){
//         alert("checkIIn")
//     }else{
//         alert("Wrong")
//     }
// }

// CheckIN(flight,law)
// console.log(flight,law)

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(law)
// CheckIN(flight,law)

// =========================================================

// const oneWord = function(string){
//     return string.replace(/ /g, "").toLowerCase();
// }

// const upperFristWord = function(str){
//     const [first , ...other] = str.split(" ")
//     return [first.toUpperCase(), ...other].join(' ');
// };

// // Higher-order function
// const transformer = function(str, fn){
//     console.log(`Orginal string ${str}`);
//     console.log(`Transformed string ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`)
// };

// transformer(`JavaScript is the best`,upperFristWord);

// transformer(`JavaScript is the best`,oneWord);

// const abc = function(){ }
// console.log(abc) // "abc"  ← variable name se le leta hai

// const high5 = function(){
//     console.log("✋");
// };

// document.querySelector("h1").addEventListener("click",high5);

// const greetArr = greeting => name => console.log(`${greeting} ${name}`)

// const greet = greetArr('Hey')
// greet("lawrence")

// const AirBus = {
//   airline: 'AirIndia',
//   iataCode: 'LC = ',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//   },
// }


// const book = AirBus.book

// const eurowing = {
//   airline: 'Eurowing',
//   iataCode: 'Ew = ',
//   bookings: [],
// }


// const Indogo = {
//   airline: 'Indigo Air',
//   iataCode: 'CH = ',
//   bookings: [], 
// }

// book.call(Indogo,52, 'Cardoza Rita');
// console.log(Indogo)

// book.call(eurowing,23, 'Cardoza Robert');
// console.log(eurowing)

// console.log(AirBus)

// Bind Method

// // const bookEW = book.bind(eurowing);
// const bookIN = book.bind(Indogo);
// const bookAR = book.bind(AirBus);

// bookIN(21,"Lawrence")
// bookAR(65,"samay")
// // bookEW(32,"Rohini");

// const bookEW23 = book.bind(eurowing,32,)
// bookEW23("Rohini");
// bookEW23('Rahul')


// // With Event Listeners
// AirBus.planes = 300;

// AirBus.buyplane = function(){
//   console.log(this)
//   this.planes++;
//   console.log(this.planes)
// };

// AirBus.buyplane()

// document.querySelector(".btn").addEventListener('click',AirBus.buyplane)


// partial Application

// const addtax = (rate,value) => value + value * rate;
// console.log(addtax (10,4))


// const addVat = addtax.bind(null,10)
// console.log(addVat(4))
// console.log(addVat(5))


// const addTaxRate = rate => value => value + value * rate

// const addTaxRate = function(rate){
//   return function(value){
//     return value * value * rate 
//   }
// }
// console.log(addTaxRate())

// const poll = {
//   question: "what is favourite programming language?",
//   options: ['0: javascript','1: Python','2:Rust','3: C++'],
//   answer: new Array(4).fill(0), 
//   registerNewAnswer(){
//     const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//     console.log(answer);

//     //Resgister answer
//     typeof answer === "number" && answer < this.answer.length && this.answer[answer]++;
//     console.log(this.answer);
//   },
// };

// document.querySelector(".poll").addEventListener('click',poll.registerNewAnswer.bind(poll))

//  const runOnce = function(){
//   console.log('this will never run again');
//  };
//  runOnce();

//  //IIFE
// (function(){
//     console.log("this will never run again IIFE ")
  
//   })();

//   console.log(private)

//   (()=> console.log("Arrow IIFE"))();

const secureBooking = function(){
  let passengerCount = 0;
  
  return function(){
    passengerCount++;
    console.log(`${passengerCount} passengers`)
  }
}

const booker = secureBooking();

booker();
booker();
booker();  
booker();


// function greet(name){

//   return function (){
//     return `Hello ${name}`
//   }
// }

// const sayHello = greet("lawrence");
// console.log(sayHello())

// function score(){

//   let count = 10

//   return function(){
//   count = count + 10
//     console.log(count)
//   }

// }

// const addscore = score();
// addscore()
// addscore()
// addscore()

let f;

const g = function(){
  const a = 23;
   f = function(){
    console.log(a*2); 
   };
};
g()
f()
console.dir(f)


const h = function(){
  const b = 777;
  f = function(){
    console.log(b*2);
  }
}

h()
f()
console.dir(f)



// const Boardpaseenger = function(n,wait) {

//   const perGroup = n / 3

//   setTimeout(() => {

//     console.log(`We are now bording all ${n} passenger`);

//     console.log(`There are 3 group , each with ${perGroup} passenger`)
    
//   },wait * 1000 );

//   console.log(`Will start boarding in ${wait} second`);

// }

// Boardpaseenger(180,3)

 (function() {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector('body').addEventListener("click",function(){
    header.style.color="blue"
  });
 })();