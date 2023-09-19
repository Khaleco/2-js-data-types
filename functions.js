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