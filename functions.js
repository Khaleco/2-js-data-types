/* 
    ? Functions
    * a blokck of reusable code. It cam:
    * take in paramerters (doors to the inside of your fx)
    * performs an action
    * return a result
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming through the parameter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    ? There are two types of functions
        * function declaration
            * are hoisted
        * function expression
            * are not hoisted

    ? Syntax:

    function indentifyer(parameter, parameter, ...) {
        function code block;
        return statement;
    }
*/

// ? Function Declaration

function sayHello() {
    return "Hello September Cohort.";
}

// console.log(sayHello());

let holdingFunctionReturn = sayHello();

console.log(holdingFunctionReturn);

function greetLearner(learner){
    return `Welcome to the class, ${learner}`;
}

console.log(greetLearner("Khale"));

function addNums(n1, n2){
    return n1 + n2;
}

console.log(addNums(10, 5));

/*
    ? Function Expression
    * utilizes a variable as a placeholder

    ? Syntax

    let identifier = function(params) {
        code block;
        return statement;
    }
*/

let nameAge = function(name, age){
    return `Your name is ${name} and you are ${age} year(s) old.`;
}

console.log(nameAge("Khale",19));

/* 
    ! Challenge
    * create a function that will give you a result of a quadratic formula based on all necessary inputs
    * check if the data type id Number. If not, return "Please use whole numbers only"
    * The formula for quadratic formula is (-b+-sqrt(b**2 - 4*a*c))/2*a
*/

function quadratic(a,b,c){
    let sqrtResult = Math.sqrt((b**2) - (4*a*c));
    if(isNaN(sqrtResult)){
        return "Please make sure to use whole numbers that result in a positive discriminant";
    } else {
        let addResult = ((-b + sqrtResult)/(2*a));
        let subResult = ((-b - sqrtResult)/(2*a));
        return(`The add result is: ${addResult}, The sub result is: ${subResult}`)
    }
}

console.log(quadratic(2, 6, 4));

/* 
    ? Arrow Fucntions
    * introduced in ES6
    * concise way of writing functions
    * part of the fx expression family
    * do not bind to .this or super (more on that in classes)
*/

/* 
    ? Concise Body Arrow Functions
    * can only have no or one parameter
    * code block must not have { }
    * return statement must be implicit
*/

let greetEveryone = () => `Hello Everyone`;
console.log(greetEveryone());

let greetMD = drName => `Hello, Dr. ${drName}`;
console.log(greetMD("Max"));

/* 
    ? Block Body Arrow Function
    * can have as many params as you want
    * allows the use of explicit return statement
*/

let concatenteStr = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string"){
        return str1 + str2;
    } else {
        return "You can only pass string values as arguments";
    }
}

console.log(concatenteStr("Khale", "Coffran"));

/* 
    ? Immediately Invoked Function Expression (IIFE)
*/

(function() {
    console.log("IIFE");
})();