// ASSESSMENT 2: Coding Practical Questions with Jest

const { indexedAccessType } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
describe("divisble3", () => {
      it("returns a string response whether the number inside an object is evenly divisible by three", () => {
            expect(divisble3(object1)).toEqual("15 is divisible by three")
            expect(divisble3(object2)).toEqual("0 is divisible by three")
            expect(divisble3(object3)).toEqual("-7 is not divisible by three")
      })
  })

// ReferenceError: divisble3 is not defined

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Create a function named divisible3
// Input: an object with a key:value pair number: # (formatted as a number)
// Use the modulo function inside of a conditional statement to determine whether the number is evenly divisible by three
// If the modulo has no remainder, return a string statement that interpolates the number value with that response
// If the absolute value of the modulo has a remainder greater than 0, return a string statement that interpolates the number value with that response
// Otherwise, the function has failed and returns a string with that message (modulo returns NaN for other data types)
// Output: an interpolated string message that describes whether the contained number is divisible by three
// Throws an error if the input is not an object or does not have the number key

const divisble3 = (object) => {
      if (typeof object != "object" || object.number === undefined){
            throw Error("Input must be an object with a 'number' key")
      } else if (typeof object.number != "number"){
            throw TypeError("The value for the number key must be a number")
      }
      if (object.number % 3 === 0) {
            return `${object.number} is divisible by three`
      } else if (Math.abs(object.number % 3) > 0) {
            return `${object.number} is not divisible by three`
      } else {
            throw Error("Something went wrong")
      }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.369 s, estimated 1 s

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
describe("titleCase", () => {
      it("returns an array with each word capitalized", () => {
            expect(titleCase(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
            expect(titleCase(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
      })
  })

  // ReferenceError: titleCase is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Create a function named titleCase
// Input: An array of strings
// If passed an array, use the higher-order function .map to modify each element within the array
// Use .charAt(0).toUpperCase to modify the first letter of each word to uppercase
// Concatenate with .substring(1).toLowerCase() to complete the word
// If the function is passed a single string, process as above and return the single string
// Output: An array of strings with the first letter in each word capitalized
// Throws a TypeError if passed an unsupported datatype or object

const titleCase = (array) => {
      if (Array.isArray(array)) {
            return array.map(value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase())
      } else if (typeof array === "string") {
            return array.charAt(0).toUpperCase() + array.substring(1).toLowerCase()
      } else {
            throw TypeError("Input must be a string or array.")
      }
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.381 s

// --------------------3) Create a function that takes in a string and returns the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("findVowel", () => {
      it("returns the index of the first vowel", () => {
            expect(findVowel(vowelTester1)).toEqual(1)
            expect(findVowel(vowelTester2)).toEqual(0)
            expect(findVowel(vowelTester3)).toEqual(2)
      })
  })

  // ReferenceError: findVowel is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// Create a function findVowel
// Input: a string
// Convert the string to all lowercase (halves the necessary passes through the string)
// Create an array with the index of each vowel
// Filter the array to retain only positive values
// If the array is empty, return -1 to indicate that there is no vowel in the string
// Otherwise return the minimum value from the array using Math.min
// Math.min returns NaN for arrays; use ... to deconstruct the array of numbers
// Output: an integer representing the index of the first vowel
// Throws a TypeError if passed anything other than a string

const findVowel = (word) => {
      if (typeof word !== "string"){
            throw TypeError("Input is not a string")
      }
      let newWord = word.toLowerCase()
      let indexes = [
            newWord.indexOf("a"),
            newWord.indexOf("e"),
            newWord.indexOf("i"),
            newWord.indexOf("o"),
            newWord.indexOf("u"),
            newWord.indexOf("y")].filter(value => value >= 0)
      if (indexes.length === 0) {
            return -1
      } else {
            return Math.min(...indexes)
      }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.401 s, estimated 1 s