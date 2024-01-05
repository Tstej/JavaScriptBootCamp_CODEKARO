/*
// Write a JavaScript function that takes a number as a parameter 
// and prints whether it's positive, negative, or zero.

function numberCheck(n){
    if(n<0){
        console.log("Positive Number");
    }
    else if(n>0){
        console.log("Negative Number");
    }
    else{
        console.log("It is zero");
    }
}

numberCheck(3);
numberCheck(8);
numberCheck(0);
*/


/*
//Write a JavaScript function that takes a positive integer as a parameter 
//and calculates its factorial using a for loop. 
//The factorial of a number N is the product of all positive integers less than or equal to N.


function factorial(n) {
    let r = 1;
    for(let i=1; i<=n; i++){
        r *= i;
    }
    return r;
}

console.log(factorial(8));
*/


/*
//Write a JavaScript function that takes two numbers 
//as parameters and returns the larger one.

function largeNumber(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

let result = largeNumber(3,9);
console.log("Large number is: " + result);
*/


/*
//Write a JavaScript function that takes a string as a parameter 
//and determines whether it's a palindrome or not. 
//A palindrome is a word, phrase, number, or other sequence of characters 
//that reads the same forward and backward 
//(ignoring spaces, punctuation, and capitalization).

function palindrome(string){
    let length = string.length;

    for(let i=0; i<1/2; i++){

        if(string[i] !== string[length - 1 -i]){
            return "It is not a Palindrome";
        }
    }
     return "It is a Palindrome";
}

let word = "0101";

console.log(palindrome(word));
*/




/*
//Write a JavaScript function that takes a positive integer as a parameter 
//and prints all the prime numbers less than or equal to that integer. 
//A prime number is a natural number greater than 1 that is not a product 
//of two smaller natural numbers.


function primeNumbers(n) {
    if (n < 2) {
        console.log("No prime numbers for input less than 2.");
        return;
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


primeNumbers(27);
*/


/*
//Write a JavaScript function that simulates a simple calculator. 
//The function should take two numbers and an operator (+, -, *, or /) as parameters 
//and perform the corresponding operation.



function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(simpleCalculator(10, 5, '+')); 
console.log(simpleCalculator(8, 4, '-'));  
console.log(simpleCalculator(5, 2, '*'));  
console.log(simpleCalculator(12, 4, '/')); 
console.log(simpleCalculator(7, 0, '/'));  
console.log(simpleCalculator(3, 6, '%')); 
*/


/*
//Write a JavaScript function that takes a string as a parameter and 
//counts the number of vowels (a, e, i, o, u) in the string.

function countVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Tejal Shinde")); 
*/

/*
//Write a JavaScript function that takes a positive integer as a parameter and 
//checks if it's a perfect number. A perfect number is a positive integer that 
//is equal to the sum of its proper divisors, excluding itself.

function isPerfectNumber(num) {
    if (num <= 0) {
        return false; // Perfect numbers are positive integers
    }

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        return true;
    } else {
        return false;
    }
}

// Example
console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(6));  
console.log(isPerfectNumber(12)); 
*/



/*
//Write a JavaScript function that takes a number as a parameter and 
//prints the Fibonacci series up to that number. The Fibonacci series is a sequence of 
//numbers in which each number is the sum of the two preceding ones.

function fibonacciSeries(n) {
    if (n <= 0) {
        console.log("Please provide a positive integer greater than zero.");
        return;
    }

    let fibSeries = [0, 1];

    for (let i = 2; fibSeries[i - 1] + fibSeries[i - 2] <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    console.log(fibSeries.join(', '));
}


fibonacciSeries(47);
*/




//Write a JavaScript function that takes a positive integer as a parameter 
//and prints its multiplication table up to 10.

function multiplicationTable(n) {
    if (n <= 0) {
        console.log("Please provide a positive integer greater than zero.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}


multiplicationTable(7);
