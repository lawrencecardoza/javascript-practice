// Fires a real request against the demo API key.
// Click the button below to run it. The response opens in the Explorer panel.
// const response = fetch('https://api.restcountries.com/countries/v5?limit=1');

// console.log(response)

// const getCountryData = function (country){
//   fetch(`https://api.restcountries.com/countries/v5?limit=1${country}`)
//   .then(function(response){
//     console.log(response)
//     return response.json();
//   })
//   .then(function(data){
//     console.log(data)
//   })
// };

// getCountryData("india")

// async function getData() {
//   return ' namaste';
// }

// const dataPromise = getData()

// dataPromise.then(res => console.log(res))

// const USER_API = 'https://dummyjson.com/users'

// const user = fetch(USER_API);

// // console.log(user)

// user.then(data => console.log(data))

// const greet = () => {

//   return new Promise((resolve,reject) => {

//     setTimeout( () => {
//       resolve("lawrence")
//     },2000)

//   });
// }

// console.log("A")

// greet()
// .then(data => {
//   console.log(data)
// })

// console.log("B")

// const login = (user,password) => {

//   return new Promise((resolve , reject) =>{

//     console.log('Checking credentials...');

//     setTimeout(() => {

//       if(user === "lawrence" && password === 123456){
//         resolve('Login Success ✅')
//       }else{
//         reject('Invalid Credentials ❌');
//       }
//     }, 2000);
//   })
// }

// console.log("Start")

// login("lawrence",123456)
// .then((data) => {
//   console.log(data)
// })
// .catch((err) =>{
//   console.log(err)
// });

// console.log("End")

// const p = new Promise((resolve, reject) => {
//   console.log('Start')

//   resolve('Success')

//   console.log('End')
// })

// p.then((data)=> {
//   console.log(data)
// })

Promise.resolve(2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => num * 2)
  .then((num) => console.log(num))

Promise.resolve(10)
    .then((a) => {
      return a + 5
    })
    .then((b) => {
      return b * 2
    })
    .then((c) => {
      return c + 5
    })
    .then(console.log)



Promise.resolve(5)
.then( x => x + 1)
.then( x =>  {
  throw 'fail';
})
.then( x => console.log("This will Not run"))
.catch(err => console.log(err));

// prommises all :- Agar ek bhi reject hua → pura Promise.all fail

const p1 =  Promise.resolve(10);
const p2 =  Promise.resolve(20);
const p3 =  Promise.resolve(30);

Promise.all([p1,p2,p3])
.then(data => console.log(data))

// Promise.allSettled :- 

const p_1 = Promise.resolve(10);
const p_2 = Promise.reject("Error");
const p_3 = Promise.resolve(30);

Promise.allSettled([p_1,p_2,p_3])
.then(data => console.log(data))

//Promise.race():-Fastest wins (chahe success ho ya error) 
// Jo promise pehle complete (resolve/reject) hota hai, uska result return karta hai.

const pro1 = new Promise((res) => setTimeout(() => res('One'), 1000))
const pro2 = new Promise((res) => setTimeout(() => res('Two'), 5000))

Promise.race([pro1, pro2]).then((result) => console.log(result))
