/* 
    ! Fizzbuzz
    * count from 0 to 100
    * if a number is divisable 3, print Fizz
    * if a number is divisable 5, print Buzz
    * if a number is divisable 3 & 5, print FizzBuzz
    * if it's neither, print number
    ! Spicey Mode
    * wrap your fizzbuzz in a fx which will take two params start and stop
    * it will execute your Fizzbuzz based on that start and stop value 
*/

// TODO: HINT - least common occurence goes first (helps with logic flow)

function fizzBuzz(start, stop){
    while(start <= stop){
        //if ((start % 3) == 0 && (start % 5) == 0){
        if (start % 15 == 0){
            console.log("FizzBuzz");
        }
        else if (start % 3 == 0){
            console.log("Fizz");
        }
        else if (start % 5 == 0){
            console.log("Buzz");
        } 
        else {
            console.log(`${start}`);
        }
        start++;
    }
    return "End";
}

fizzBuzz(15,30);
fizzBuzz(10,20);

module.exports = fizzBuzz;