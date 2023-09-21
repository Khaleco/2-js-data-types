/* 
    ? IO & Callbacks
    * Process
        * an event that runs in the background or foreground of you machine
    * Node.js allows access to its processes via process object
    * this allows us to process external input and internal output (IO)
    * we do this by using process.stdin and process.stout
*/

// Import statement
const process = require("process");

console.log(`This is an output. From Node proccess PID:${process.pid}`);

/* 
    ? Callback Function
    * fx that is passed as an argument to another fx or method
    * is a fx that runs when something occurs
*/

// process.stdin.once("data", input => {
//     console.log(`This is our input being repeated: ${input}`);
//     process.exit();
// });

// process.stdin.once("data", function(input) {
//     console.log(input.toString());
//     process.exit;
// })

// function handleInput(input) {
//     console.log(input.toString());
//     process.exit;
// }

// ? Passing function by reference
// process.stdin.once("data", handleInput);

// process.stdin.on("data", handleInput);

// .on() method allows us to continually listen to a data stream

//   (1)    (2)  (3) (4)              (5)
// process.stdin.on("data", input => console.log(input.toString()));
/* 
    * 1. Node's Process Interface
    * 2. In Data Stream
    * 3. Event Listener Method
    * 4. Event we're listening for
    * 5. Callback fx which runs when the event occurs
*/

// process.stdout.write("What is your name? ");
// process.stdin.on("data", input => {
//     let value = input.toString().trim();
//     value == "Paul"
//         ? process.stdout.write("Get out of here!")
//         : process.stdout.write("Finally someone smart!");
//     process.exit();
// })

// ? Readline

const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question("What is your name? ", input => {
    rl.setPrompt(`Hello ${input}`);
    rl.prompt();
    rl.close();
})