/* 
    ? Scope & Hoisting

    ? Scope
    * used to determine how information in different code blocks can be accessed

    ? Five Scope Types
    * Global/window
    * Block
    * Function
    * Module
    * Lexical
*/

/* 
    ? Global Scope
    * Outermost scope
    * window object when in client
    * js file when in Node
    * accessible from every other scope
*/

let globalScopeVariable = "This is a global scope variable";

/* 
    ? Function Scope
    * accessible only inside of a function
*/

function scope(){
    let fxScopeVariable = "This is a function scope variable";
    console.log(fxScopeVariable);
    console.log(globalScopeVariable);
}

scope();

// console.log(fxScopeVariable); // ReferenceError

/* 
    ? Block Scope
    * anywhere there are { }
*/

{
    let blockScopeVariable = "Block scope variable";
    console.log(blockScopeVariable);
}

// console.log(blockScopeVariable); // ReferenceError

/* 
    ? Lexical Scope
    * variables are accessible by their nested position
    * inner fx scope can access out fx scope
*/

function outerFx() {
    // outer fx scope
    let ofxv = "Outer fx scope variable";

    function innerFx() {
        // inner fx scope
        let ifxv = "Inner fx scope variable";
        console.log(ofxv);
        return ifxv;
    }

    return innerFx();
}

console.log(outerFx());

/* 
    ? Module Scope
    * encapsulates objects nested inside of other modules or files
    * allows the use in other files
*/

const fizzBuzz = require("./fizzbuzz");
console.log(fizzBuzz(10,20));

/* 
    ? Hoisting
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        * first, it looks for VARiable and fx declarations and hoists them
        * it allocates memory space for those declarations
        * it then executes the code line-by-line
*/

// console.log(myName); // ReferenceError cannot access 'myName' before initalization
let myName = "Khale Coffran";

console.log(age); // Undefined
var age = 28;

// ? Function Declarations are hoisted
x()
function x() {
    console.log("Function declaration");
}

// y(); // ReferenceError
let y = function() {
    console.log("Functoin expression");
}

function run() {
    var foo = "foo";
    let bar = "bar";
    let fxVariable = "test"
    console.log(foo, bar);
    {
        var moo = "moo";
        let baz = "baz";
        console.log(moo, baz);
    }
    // console.log(baz); // ReferenceError: scoped to immediate block
    // console.log(moo); // ? WORKS: scoped to immediate function block
}

run();
// console.log(fxVariable); // ReferenceError

{
    {
        var something = "this is something"
    }
}

console.log(something);
// ? This works because global scope is also considered a function scope


// ! THIS IS BAD! Don't use hoisting to your "benefit"!!!!