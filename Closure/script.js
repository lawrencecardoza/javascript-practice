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

const AirBus = {
  airline: 'AirIndia',
  iataCode: 'LC = ',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} Booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
  },
}


const book = AirBus.book

const eurowing = {
  airline: 'Eurowing',
  iataCode: 'Ew = ',
  bookings: [],
}


const Indogo = {
  airline: 'Indigo Air',
  iataCode: 'CH = ',
  bookings: [], 
}

// book.call(Indogo,52, 'Cardoza Rita');
// console.log(Indogo)

// book.call(eurowing,23, 'Cardoza Robert');
// console.log(eurowing)

// console.log(AirBus)

// Bind Method

// const bookEW = book.bind(eurowing);
const bookIN = book.bind(Indogo);
const bookAR = book.bind(AirBus);

bookIN(21,"Lawrence")
bookAR(65,"samay")
// bookEW(32,"Rohini");

const bookEW23 = book.bind(eurowing,32,)
bookEW23("Rohini");
bookEW23('Rahul')


// With Event Listeners




