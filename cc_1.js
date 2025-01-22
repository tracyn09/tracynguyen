//Task 3 Number Data Type
let accountBalance = 2457 
console.log("Initial Balance: $" + accountBalance);

//Cash Outflow 300
accountBalance -= 300;
console.log("After $300 Outflow: $" + accountBalance)

//Cash Inflow 500
accountBalance += 500;
console.log("After $500 Inflow: $" + accountBalance)

//3% Interest Applied
accountBalance *= 1.03;
console.log("After 3% Applied Interest: $" + accountBalance)

//Splitting Balance // Dispersing Amongst Multiple Accounts
accountBalance /= 2;
console.log("After Splitting Balance: $" + accountBalance)

//Task 4 String Data Type
let customerName = "Marvin"
let welcomeMessage = "Hello," + customerName + "! Thanks for visiting!";
console.log(welcomeMessage)

//Task 5 Boolean Data Type
let isLoggedIn = false;
let isAdmin = true;
console.log(isLoggedIn && isAdmin);