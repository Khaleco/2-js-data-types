/* 
    ? Loops
    * allow us to execute a block of code repetedly until an exit condition han been met
*/

/* 
    ? Traditional For Loop

    ? Syntax
    for (start; stop; step) {
        code block to execute;
    }

    * iterator - (ex: i) vaule that is a placeholder for our loop
    * iterable - (ex: "longWord") value we can interate/loop over
*/

for (let i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

// ? Infinite Loop - a loop without a stop condition

 /*    for (let i = 0;; i++) {
        console.log(i);
    } */


let longWordEN = "supercalifragilisticecpialidocious";
console.log(longWordEN.length);

for (let index = 0; index < longWordEN.length; index = index + 1) {
    console.log(`Index: ${index} Letter ${longWordEN[index]}`);
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an interable against a condition
    * do not require an index number
    * do not require a stop statement
*/

let longWordDE = "Kraftfahrzeughapsflichverersirscherung";

for (i in longWordDE) {
    console.log(`Index: ${i} Letter: ${longWordDE[i]}`);
}

/* 
    ? For-of Loop
    * allows us to seek iterable value against a condition
*/

for (i of longWordEN) {
    console.log(i);
}

/* 
    ? for-of & for-in difference
    * for in allows to loop over items that are not an array
    * for of works on indexed items only
*/

/* 
    ! Challenges
    1
    * Creat a variable with a sentence
    * Loop over the variable
    * If a letter is a vowel, increment count, print it
    * At the end, you should have a list of vowels and the total vowel count
    2
    * Reverse a string
*/

let challengeVar = "a hunter is a hunter even in a dream, ahahaha...";
let count = 0;
for (ltr of challengeVar) {
    if (ltr == "a" || ltr == "e" || ltr == "i" || ltr == "o" || ltr == "u" || ltr == "y"){
        console.log(ltr);
        count++;
    }
}
console.log(`Total amount of vowels is: ${count}`);

let name = "Khale";

for (let i = name.length -1; i >= 0 ; i--) {
    console.log(name[i]);
}

/* 
    ? While Loop
    * Executes a statement inside of a code block
    * it does so as long as a the condition evaluates to true
    
    ? Syntax
    while(true) {
        do this until false;
    }
*/

let loopCount = 0;

while (loopCount <= 100) {
    console.log(loopCount);
    loopCount++;
}

/* 
    ? Do While Loop
    * executes code in the do section while a condition remains true
*/

let doCount = 0;

do {
    console.log(doCount);
    doCount++;
} while (doCount <= 100);