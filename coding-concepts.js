// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: ["A", "l", "p", "h", "a", " ", "2", "0", "2", "3"]
// b) Verify and explain: .split() is a built-in function for strings that divides the string into substring elements within an array. The "" argument, when passed to the function, serves to divide the string at each character.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The function does not include a return line, which defaults to undefined. Modifying the line to include the return keyword would return the interpolated string "Hello, LEARN Student".

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The .map() higher-order function takes each value in an array and multiplies it by two (ie scaling in linear algebra). This array is then stored to the variable multipliedByTwo, which is passed to the console log.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The .filter() higher-order function creates an array consisting only of the values that have a remainder when divided by two. This array is then stored to the variable onlyOdds, which is passed to the console log.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: myCodingSkills is an object. The languages key is mapped to an array, ["JavaScript", "Ruby"], which is accessed directly through the syntax object.key. The [0] accesses the first element in this array, which is passed ot the console log.
