// Create two arrays of numbers called numbers1 and numbers2
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

// Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
let numbers = [...numbers1, ...numbers2];

// Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = (x) => x * x;

// Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
let squares = numbers.map(square);

// console.log(squares)

// Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.

let isEven = (x) => {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    };
}
// console.log(isEven(5))

// Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
let evenSquares = squares.filter(isEven);

// console.log(evenSquares)

// Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare, secondEvenSquare] = evenSquares

// console.log(firstEvenSquare)
// console.log(secondEvenSquare)

// Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`This number set consists of ${numbers}. The squared results of the array are ${squares}. The even results are ${evenSquares} and the first two elements of the aforementioned array are ${firstEvenSquare} and ${secondEvenSquare}.`)