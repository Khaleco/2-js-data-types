/* 
    ? Conditionals and Logic Gates
    * condintional statement checks if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, a code within a statement executes
    * if it's falsey, nothing happens unless we specify otherwise
    
    ? Expressions vs Statements
    * Expression
        * unprocessed value grouped using the ()
        * evaluated to be truthy
        * can be empty
        ! Expressions evaluate
    * Statements
        * keyword
        * expression
        * and code block
        ! Statments evaluate and execute code block when invoked
        ! Conditional is an example of a statment
*/

/* 
    ? If Statement
    * Checks if something is true and executes the code
*/

let lightSwitch = "on";
console.log("The value of the lightSwitch variable is", Boolean(lightSwitch));
if (lightSwitch == "on") {
    // (expr) must resolve to true for the code to run
    console.log("The light is on.");
}
else {
    console.log("The light is off.");
}

/* 
    ? Else if Statement
    * allows us to add additional condition(s) if the prior one has not been satisfied
*/

let temp = 72;

if (temp >= 80) {
    console.log("It is very hot out");
} else if (temp >= 70) {
    console.log("A very nice day");
}

/* 
    ? Else Statment
    * if all else fails, execute this code
*/

if (temp >= 100) {
    console.log("Inferno");
} else {
    console.log("It's some other temperature");
}

/* 
    ? SYNTAX:

    if (conditionIsTrue) {
        execute this code block;
    } else if (conditionIsTrue) {
        execute this code block; 
    } else {
        execute this code block;
    }
*/

/* 
    ? Logical Operators NOT, AND, OR
    * OR Operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I go to the movies OR eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = true)
        * (dinner & no movies = true)
        * (no dinner & no movies = false)
    * AND Operator ( && )
        * true if both conditions is true
        * ex: I will be happy if I go to the movies AND eat dinner
        * (dinner & movies = true)
        * (no dinner & movies = false)
        * (dinner & no movies = true)
        * (no dinner & no movies = false)
    * NOT Operator ( ! or in expression by != )
        * flips the logical expression
*/

// ? NOT Example
lightSwitch = 0;

if (!lightSwitch) {
    console.log("The light switch is off");
}

lightSwitch = "off";

if (lightSwitch != "on") {
    console.log("This light switch is off");
}

// ? AND OR Example

let sensor = "inactive";
let alarm = false;

if (sensor == "active" || alarm) {
    console.log("The alarm may be on");
} else if (sensor =="inactive" && alarm){
    console.log("Your sensor is likly broken");
} else if (sensor == "inactive" && !alarm) {
    console.log("The alarm is likely off");
}

/* 
    ! Challenge
    * create an age variable with a number between 0-82
    * check if the age is under 16, say they can't drive
    * if the age is between 16 & 18, say they can drive but not drink
    * if the age is between 18 & 21, say they can vote but not drink
    * if the age is over 21, they can drink
    ! Spicey mode
    * how would you handle if a user inputs not a number> ex: "potato" as age
*/

let age = 19;

if (age < 16) {
    console.log("You can not drive.");
} else if (age >= 16 && age < 18) {
    console.log("You can drive but not drink.");
} else if (age >= 18 && age < 21) {
    console.log("You can vote but not drink.");
} else if (age >= 21) {
    console.log("you can drink.");
} else {
    console.log("That is not an age.");
}

/* 
    ! Important Note
    * if you want your condition to display any possible match, create separate if statments
    * if you want your condition to display ONE EXACT match, chain your conditional statements
*/

/* 
    ? Ternaries
    * an expression
    * a quick way of creating if/else conditional
    * commonly used to check a quick condition
    
    ? Syntax

    conditional ? expr if true : expr if false

    ? Chaining Syntax

    conditional ? expr if true
                : else if expr ? expr if true
                : else if expr ? expr if true
                : else or null
*/

let ignition = true;

ignition ? console.log("Car is ready to start") : console.log("Turn ignition on");

// ? Chaining Ternaries

let season = 2;

if (season ==1 ){
    console.log("Spring");
} else if (season ==2 ){
    console.log("Summer");
} else if (season ==3 ){
    console.log("Autumn");
} else if (season ==4 ){
    console.log("Winter");
}

season == 1 ? console.log("Sping")
            : season == 2 ? console.log("Summer")
            : season == 3 ? console.log("Autumn")
            : season == 4 ? console.log("Winter")
            : null;

// ! If you don't have an else you must end in a null to avoid a syntax error

/*
    ? Challenge
    * take previous challenge and write it in a ternairy
*/

age < 16 ? console.log("you can't drive.")
    : age < 18 ? console.log("you can drive but not drink.")
    : age < 21 ? console.log("you can vote but not drink.")
    : age >= 21 ? console.log("you can drink.")
    : console.log("Invaild input, please input age.");

/* 
    ? Switch Statements
    * execute a block of code dependent upon a different case
    * we ask a question requiring specific response determined by our answer
*/

let uprightInstructor = "Paul";

switch(uprightInstructor) {
    // information that cases are compared against
    case "Paul":
        // condition that's compared against switch
        // execute the code below
        console.log(`${uprightInstructor} is a Senior Leas SD Instructor`)
        // used to stop other cases from evaluating
        break
    case "Rob":
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        break
    case "Ben":
        console.log(`${uprightInstructor} is our Program Manager`)
        break
    default:
        console.log(`${uprightInstructor} may not work here`)
}