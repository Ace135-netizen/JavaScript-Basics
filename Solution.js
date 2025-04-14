

let myfirstname = 'Charles ';
let mylastname = 'Chukwuma'

console.log(myfirstname + mylastname)


let firstNum = 4;
let secondNum = 6;

sumofnum = (firstNum + secondNum);
diffofnum = (firstNum - secondNum);
prodofnum = (firstNum * secondNum);
quotientofnum = (firstNum / secondNum);

console.log('The sum of the numbers is ' + sumofnum)
console.log('The difference of the numbers is ' + diffofnum)
console.log('The product of the numbers is ' + prodofnum)
console.log('The quotient of the numbers is ' + quotientofnum)


// Convert celsius to fahrenheit
let celsius = 0

const fahrenheit = (celsius * 1.8) + 32;

console.log(`Canverting ${celsius}°C gives ${fahrenheit}°F` )


// Area of rectangle

let widthofrect = 5;
let lengthofrect = 8;

Areaofrect = (lengthofrect * widthofrect);

console.log(`The area of a rectangle with length ${lengthofrect} and width ${widthofrect} is ${Areaofrect}. `)

// Test for even or odd number

let testforevennum = 7;

if (testforevennum % 2 === 0) {
    console.log(`${testforevennum} is an even number. `)
}
else {
    console.log(`${testforevennum} is an odd number. `)
}



// To check if it is a leap year, the year should be divisible by 4 
// If it can also be divisible by 100 it is not a leap year unless it is also divisible by 400


let year = 2007;

if (year % 4 === 0 && year % 100 !== 0 || year  % 400 === 0){
    console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}


// Reverse of string input


function reverseString(strForReverse) {
    return
 strForReverse.split('').reverse().join('');

}

const resultOfReverse = reverseString('Tech crush');

console.log(resultOfReverse);

// Number of vowels

const countVowels = (givenstr)=> {
    const theVowels = 'aAeEiIoOuU';
    let count = 0;

    for (let char of givenstr){
        if(theVowels.includes(char)){
            count++;
        }
    }

    return count;
};

const wordm = "Thank you all at Tech Crush";
console.log(`Number of vowels  : ${countVowels(wordm)}`);


// Find largest number in array

const numbers = [2, 5, 1, 34, 9];

let largestnum  = numbers[0];

for (let num of numbers) {
    if (num > largestnum){
        largestnum = num;
    }
}

console.log(`The largest number among the listed numbers is ${largestnum}`);

// Palindrome

const isPalindrome = (str) => {

    const filteredstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedstr = filteredstr.split('').reverse().join('');
    return filteredstr === reversedstr
};

console.log(isPalindrome('Tech Crush'));
console.log(isPalindrome('Helleh'))


// Calculate factorial

const factorialofnum = (n) => {
    if (n < 0) return 'Invalid Input';

    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
};

console.log(factorialofnum(3));


// Generate random number between two given values

const RandomInteger =(min, max) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(RandomInteger(4, 66));



// Conversion of seconds

const convertseconds = (inputseconds) => {
    const hours = Math.floor(inputseconds / 3600);
    const minutes = Math.floor ((inputseconds % 3600) / 60);
    const seconds = (inputseconds % 60);

    return (`${hours}h ${minutes}m ${seconds}s`);
};

console.log(convertseconds(5000));



// Checking for prime number

const numisPrime = (num) => {
    if (num <= 1) return false;

    if(num === 2 )  return true;

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(numisPrime(64));


// Capitalizing first letters of words

const capitalizeWords = (sentence) => {
    return sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

console.log(capitalizeWords('tech crush is really helpful'))



// Sum of numbers from 1 to n

const sumToN = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i ++){
        sum += i;
    }
    return sum;
};

console.log(sumToN(6));



// Average of numbers in an array

const findAverage = (numbers) => {
    const sum = numbers.reduce((total, num) => total + num, 0);
    const Average = sum / numbers.length;
    return Average;
};

const nums = [2, 4, 6, 8, 10];

console.log(findAverage(nums));


//Removing duplicate values in an array

function removeDuplicates(thisarray) {
    return [...new Set(thisarray)];
}

const setOfNumbers = [2, 5, 7, 7, 8, 8, 8, 8, 9, 0, 0];
const filterednumbers = removeDuplicates(setOfNumbers);

console.log(filterednumbers);


// Countdown to Blast Off

function countdown(){
    for(let i = 10; i >= 1; i --){
        console.log(i);
    }
    console.log('Blast Off!');
    }

    countdown();



// Determining if a string has only numbers


function isOnlyNumbers(str){
    return /^\d+$/.test(str);
};

console.log(isOnlyNumbers('Hello world'));
console.log(isOnlyNumbers('454645'));



// Finding second number in Array


function findSecondSmallest(array1){
    if (array1.length < 2){
        return null;
    }

    const sortedArray = [...new Set(array1)].sort((a, b) => a - b);

    return sortedArray[1] !== undefined ? sortedArray[1] : null;

}

const numbersexample = [4, 6, 8, 3, 98, 65, 7, 5];
const secondSmallest = findSecondSmallest(numbersexample);

console.log(secondSmallest);



// Multiplication table of 4

function multiplicationTable(givennumber){
    for (let i = 1; i <= 12; i++){
        console.log(`${givennumber} x ${i} = ${givennumber * i}`);
    }
}

const givennumber = 4;
multiplicationTable(givennumber);



// Password validation


function validatePassword(Password){
    const minLength = 8;
    const hasAnUppercase = /[A-Z]/.test(Password);
    const hasALowercase = /[a-z]/.test(Password);
    const hasANumber = /\d/.test(Password);

    if (Password.length >= minLength && hasAnUppercase && hasALowercase && hasANumber){
        return true;
    }
    else {
        return false;
    }
}

const Password = 'Techcrush4';
console.log(validatePassword(Password));



// Calculator with basic operations

function calculator(num1, num2, operation){
    switch(operation){
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0){
                return 'Division by zero is invalid';
            }    
            return num1 / num2;
        default:
            return 'The operation you entered is not available';    
    }
}


const num1 =8;
const num2 = 0;

console.log(calculator(num1, num2, 'add'));
console.log(calculator(num1, num2, 'subtract'));
console.log(calculator(num1, num2, 'multiply'));
console.log(calculator(num1, num2, 'divide'));
console.log(calculator(num1, num2, 'quotient'));



// Factors of a number

function findTheFactors(factornum){
    let factors = [];
    for (let i = 1; i <= factornum; i++){
        if (factornum % i === 0){
            factors.push(i);
        }
    }
    return factors;
}

const factornum = 10;
const factors = findTheFactors(factornum);

console.log(`The factors of ${factornum} are: `, factors);



// Checking for anagrams


function areAnagrams(str1, str2){

    str1 = str1.replace(/\s/g,'').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();


    if (str1.length !== str2.length){
        return false;
    }
    const sortedstr1 = str1.split('').sort().join('');
    const sortedstr2 = str2.split('').sort().join('');

    return sortedstr1 === sortedstr2;
}

console.log(areAnagrams('hello', 'olehl'));



// Fibonacci sequence

function generateFibo(n){
    let sequence = [];

    if (n <= 0){
        return sequence;

    }

    sequence.push(0);
    if (n === 1){
        return sequence;
    }

    sequence.push(1);

    for (let i = 2; i < n; i++){
        const next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }
    return sequence;
}

const n = 5
const fibonacciSequence = generateFibo(n);

console.log(`Fibonacci sequence up to ${n} terms = `, fibonacciSequence);




// Sorting without using built in sorting method

function bubbleSort(array2){
    let n = array2.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++){
            if (array2[i] > array2[i + 1]){
                let temp = array2[i];
                array2[i] = array2[i + 1];
                array2[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array2;
}

const numbersForBubbleSort = [1, 6, 8, 4, 3];
const sorted = bubbleSort(numbersForBubbleSort);


console.log('Sorted array is : ', sorted);




// Amount of times an element appears in an array



function countOfOccurences(array3, element){
    let count = 0;
    for(let item of array3){
        if (item === element){
            count++;
        }
    }

    return count
}


const numbersForElements = [3, 5, 3, 3, 3, 3, 3, 6, 8, 9, 3];
const targetelement = 3;


console.log(`The elemenet ${targetelement} appears ${countOfOccurences(numbersForElements,targetelement)} times. `)





// Shopping cart program


class ShoppingCart {
    constructor() {
        this.items = [];

    }

    addItem(name, price) {
        this.items.push({ name, price});
        console.log(`${name} added to cart. `);
    }

    removeItem(name) {
        const index =
        this.items.findIndex(item => item.name === name);

        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`${name} is removed from the cart. `);
        }
        else {
            console.log(`${name} is not found in the cart. `);

        }
    }

    calculateTotalItems() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;

        }

        return total;
    }

    showCart() {
        console.log('Current cart items: ');
        this.items.forEach(item => {
            console.log(`-${item.name}: #${item.price.toFixed(2)}`);
        });

        console.log(`Total: #${this.calculateTotalItems().toFixed(2)}\n`);
    }
}


const cart = new ShoppingCart();

cart.addItem('Airpod', 20000);
cart.addItem('Charger', 8500);
cart.addItem('Phone pouch', 5000);
cart.addItem('T-shirt', 18000);
cart.addItem('Speaker', 85000);
cart.showCart();

cart.removeItem('T-shirt');
cart.showCart();

console.log(`The finalized total is: #${cart.calculateTotalItems().toFixed(2)}`);
