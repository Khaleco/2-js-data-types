/* 
    ? Promises
    * An object that may produce a singular value in the future

    ? Three States
    * Pending (unfinished)
    * Fulfilled (complete value result)
    * Rejected (error)

    * Promises allow other code to execute without having to wait for their completeion
*/

function standard() {
    return "No promises here";
}

console.log(standard());

function promisesFx() {
    return new Promise((resovle, reject) => {
        // reject("A promises lies here")
        setTimeout(() => {
            resovle("After 3 seconds, it resolves")
        }, 3000)
    })
}

// console.log(promisesFx());

// ? In order to get tangible data out of a Promises object, we must resolve it

promisesFx()
.then(msg => console.log(msg))
// resovler that executes a fucntion when a promise has been fulfilled
.catch(err => console.log(err))
// executes a fx when a promise has been rejected (error handling)
.finally(() => console.log("This code runs after promise is dome"));
console.log("Code after the promises");

/* 
    ? Asyncronous Function
    * introduced in ES7
    * alternative to writeing promises
    * a function that return a promise object
    * allows us to resolve or reject
    
    ? Syntax
    async function asFx() { }
    const asFx = async function() { }
    const myFx = async () => { }
*/

async function asyncFx() {
    return "Hello learners!";
}

console.log(asyncFx());

// ? How do we get values out of async then?

// * 1. use a resolver
asyncFx().then(msg => console.log(msg));
// * 2. use a await keyword inside of an async fuction

/* 
    ? Await Keyword
    * can be utilized only inside of an async function
    * tells JS we must wait in promise returning fx before moving on
*/

async function start() {
    // waits for resultion of a problem
    const result = await asyncFx();
    console.log(result);
    console.log("Code runs after await b/c await maintains order");
}

start();