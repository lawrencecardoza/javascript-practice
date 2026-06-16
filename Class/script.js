// class User {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   greet() {
//     console.log(`Hello my name is ${this.name} and I'm ${this.age} year old `)
//   }
// }

// const user1 = new User('lawrence', 24)
// const user2 = new User('Samay', 23)
// const user3 = new User('Rohini', 25)
// const user4 = new User('Sahil', 24)
// user1.greet()
// user2.greet()
// user3.greet()
// user4.greet()



// class BankAcount {
//   constructor(owner,balance){
//     this.owner = owner
//     this.balance = balance;
//   }

//   desposit(amount){
//     this.balance += amount;
//     console.log(`Balance:-${this.balance}`)
//   }

//   withdraw(amount){
//     this.balance -= amount;
//     console.log(`Withdraw:-${this.balance}`)
//   }
  
// }

// const acc1 = new BankAcount("lawrence",1000);

// acc1.desposit(500);
// acc1.withdraw(200)

// --------------------------Multiple Methods----------------------

//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   greet(){
//     console.log(`Name:- ${this.name}`)
//   }

//   getAge(){
//     console.log(`User age:- ${this.age}`)
//   }

//   changeName(newName){
//     this.name = newName
//   }

// }

// const user1 = new User1("Gopal",23)
// user1.greet();
// user1.getAge();
// class User1 {

// ----------------------------Inheritance (extends)----------------------

class BankAcount {
  constructor(owner, balance) {
    this.owner = owner
    this.balance = balance
  }

  desposit(amount) {
    this.balance += amount
    console.log(`Balance:-${this.balance}`)
  }

  withdraw(amount) {
    this.balance -= amount
    console.log(`Withdraw:-${this.balance}`)
  }

   showBalance() {
    console.log(`Balance: ₹${this.balance}`);
  }
}
  

class SavingsAccount extends BankAcount {
  addInterest() {
    this.balance += 100
    console.log(`Interst  Add `)
  }
}

const acc1 = new BankAcount('lawrence', 1000)
const savings = new SavingsAccount('Lawrence', 1000)

acc1.desposit(500)
acc1.withdraw(200)

savings.desposit(500)// SavingsAccount me likhe hi nahi gaye ye parent se aaye.
savings.addInterest()

savings.showBalance()



