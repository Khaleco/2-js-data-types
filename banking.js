/* 
* Create a simple banking application in JavaScript without using closures. Implement the application using functions, conditionals, loops, and variables to manage a bank account.

* Write a createAccount function that initializes an account with an initial balance. This function should return an object containing the following methods:

        * deposit(amount): Deposits the given amount into the account. If the amount is positive, add it to the balance and display the new balance. If the amount is negative or zero, display "Invalid deposit amount. Please enter a positive number."

        * withdraw(amount): Withdraws the given amount from the account. If the amount is positive and there are sufficient funds, subtract it from the balance and display the new balance. If the amount is negative, zero, or there are insufficient funds, display "Invalid withdrawal amount" or "Insufficient funds" accordingly.

        * checkBalance(): Displays the current account balance.

    * Create a new account using createAccount with an initial balance of $1000.

    * Perform various banking operations on the account to test your code. Display the results of each operation.
*/

function createAccount(initial) {

    function deopsit(amount) {
        if (amount != 0 && amount > 0) {
        return initial + amount;
        } else {
            return "Invalid deposit amount. Please enter a positive number.";
        }
    }

    function withdraw(amount) {
        if (initial - amount < 0) {
        return "Insufficient funds."
        } else if (amount > 0) {
        return initial - amount;
        } else {
            return "Invalid withdrawal amount."
        }
    }

    function checkBalance() {
        return initial;
    }
    return {deopsit, withdraw, checkBalance};
}

var account = createAccount(1000);

console.log(createAccount());

console.log("-------------------------------------------------------");
console.log(account.checkBalance());

console.log("-------------------------------------------------------");
console.log(account.deopsit(500));
console.log(account.deopsit(0));
console.log(account.deopsit(-500));

console.log("-------------------------------------------------------");
console.log(account.withdraw(500));
console.log(account.withdraw(1000));
console.log(account.withdraw(10000));
console.log(account.withdraw(0));
console.log(account.withdraw(-100));


/* function createAccount(initial) {
    return initial;
}

let paulsChecking = createAccount(1000);

console.log(paulsChecking);

function deposit(amt, acct){
    if (amt >0){
        acct += amt;
        console.log("Current balance", acct);
    } else {
        console.log("Enter positive number")
    }
}

deposit(100, paulsChecking);

function withdraw(amt, acct) {
    if (amt <= 0) {
        console.log("Invalid amount");
    }
    if (amt > acct) {
        console.log("Insufficiant balaence");
    } else {
        acct += amt;
        console.log("Current balance", acct);
    }
}

withdraw(1100, paulsChecking);

function checkBalance(acct) {
    console.log("Current balance", acct);
}

checkBalance(paulsChecking); */