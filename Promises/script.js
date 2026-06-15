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

const USER_API = 'https://dummyjson.com/users'

const user = fetch(USER_API);

// console.log(user)

user.then(data => console.log(data))
