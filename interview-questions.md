# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
Parameters and arguments seem similar at first glance. Both parameters and arguments are found within the parenthesis of a function or method, allowing the flow of data or objects to that function.

Functionally, arguments are data passed to a function while parameters are the data processed within a function. Proper encapsulation should minimize direct mutation of data or objects passed to a function by creating copies and using accessor methods.

Researched answer:

The key difference between a parameter and an argument are their scope of visibility. Parameters are named objects used within the statement block of a function (as well as their condition, initialization, and afterthought sections) to perform designated operations. Arguments are the actual values or objects passed to a function during the function call or invokation.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:

The .map() method allows the manipulation of elements within an array. The predefined parameters used within the .map() method are value, index, and array. Value refers to the data or object at each index and is the only required parameter. When processing .map(value => *manipulation*), javascript returns an array with the same size as the original array. Each element will be modified based upon the specified manipulation.

Index and array are both optional parameters. Index refers to each individual location while array refers to the entire array. Using these parameters allows the .map() method to perform functions based upon the location of an element within an array or other elements of an array.

Researched answer:

In particular, when using an array to store objects within a given class or related subclasses, the .map() function provides a much more efficient means of operating across the depth of these objects than a similar loop. For example, if an array of person objects each have properties for name, address, etc, then a mailing list could be generated through the use of .map() to fill in the appropriate fields on forms through the related properties found in each object.

3. What is the difference between map and filter?

Your answer:

The .map() and .filter() methods are both applicable to the Array class in JavaScript. Both are higher-order functions that apply logic to the entire array. Particularly for sparse arrays, these methods have improved runtime efficiency compared to alternative use of loops to pass through an array. Both methods require the use of the value parameter and optionally allow the use of index and array parameters.

The .map() method is used to manipulate each element within an array. This method always returns an array of the same length. The basic syntax array.map(value => *manipulation*) allows each value to undergo the designated manipulation.

The .filter() method is used to return a subset of the original array, based upon criteria designated by the nested function. The basic syntax array.filter(value => *criteria*) returns an array with the values where criteria are fulfilled.

Notably, the .filter() method does not modify the values extracted from the original array. Nesting a .filter() method within a .map() method through .filter().map() would allow manipulation of the values contained in the subset of the original array.

Although reversing the order of nesting these methods is possible in concept (ie .map().filter()), such manipulation is redundant with the functionality inherent to the .filter() method.

Researched answer:

Another related method for arrays is the .reduce() method. The reduce method can combine functions of the .map() and .filter() methods. Similar to the .map() and .filter() functions, .reduce() includes several callback arguments. These arguments are expanded with the addition of the previous value, which can be initialized to a value passed to the method with the original call. .reduce() also keeps track of an accumulated value, which can be used to perform sums or multiples across the array.

1. What is iteration?

Your answer:

Iteration is a process of making subsequent passes through a logical loop or recursive function call. Each pass performs the designated operations to either progressively get closer to a solution or to affect a portion of the data until end criteria are fulfilled. Common examples of iteration in JavaScript are recursive functions calls, for() loops, while() loops, and do{}... while() loops.

Although iteration is a powerful technique, sequential passes through data can limit the throughput possible with these approaches. Advanced algorithms take advantage of powerful multi-threading or multi-processor operations to simultaneously process larger segments of data, which can reduce the number of iterations necessary.

Researched answer:

Iteration in JavaScript uses loops to repeatedly pass through procedures and perform actions. There are several statements for loops in JavaScript, providing different ways of initiating, processing, and ending a loop. These statements are:

for (initialization; condition; afterthought){
      statement
} // Continues to loop through the statement while the condition is true. Initialization and afterthought provide actions for the beginning and end of the loop, respectively.

do {
      statement
}
while (condition) // Loops through the statement while the condition is true. Performs the statement at least once.

while (condition) {
      statement
} // Loops through the statement while the condition is true.

for (variable in object){
      statement
} // Loops through an object, performing the statement with each distinct property.

for (variable of object){
      statement
} // Used with iterable objects (Arrays, Maps, Sets, and arguments) to perform the statement with each element.

Several commands may be used within loops to enhance their capabilities and flexibility:

label:
      statement
// Provides an identifier for beginning operation at the statement from a different part of the code block.

break;
break label;
// Used to terminate performance of a loop, switch, or labeled statement.

continue;
continue label;
// Used to terminate the current iteration of a loop and immediately proceed to the next iteration.

1. What is the difference between a function and a method?

Your answer:

Both functions and methods have similar appearances and uses in JavaScript. Calls to a function/method can pass data or objects as arguments, perform designated operations within the function/method, and then return data or objects upon completion. The most significant difference between a function and a method is that methods are instances of functions within a class or object.

In JavaScript, a function can be created within the main script. When created in this manner, it can be called directly. The Math library provides a number of useful functions for common applications. Strings and arrays have built-in methods for accessing and manipulating their data.

Researched answer:

JavaScript functions are blocks of code that perform tasks to modify or access data. They are versatile and useful because they can help to replicate repeatable behavior or provide means of repeating behaviors when different arguments are passed to that data. Functions are independent operations that can be called by any line of code or object within its block of scope.

JavaScript methods are properties of objects that operate as a function. They include many of the same characteristics, including benefits and limitations, of functions. When using objects as containers to protect data through encapsulation, methods become the sole means of changing or accessing the other properties of an object that has already been declared and initialized.

Methods also provide a unique opportunity to provide similar behaviors for different objects in the same class. This allows related but unique behavior for each independent object.



6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is an organizational system that produces clean code. Declarations for variables, functions, and other tools are consolidated at the beginning of code while script for procesing those data and performing functions follows. Hoisting allows compilers to more efficiently manage memory storage and garbage collection for an application during runtime.

Researched answer:

Hoisting brings variables, functions, and classes to the top of the block by the interpreter. Specifically within JavaScript, variable declarations are hoisted to the top while initializations remain in place within the code. This allows the declaration of a variable after its initialization and use. Although this prevents issues with compiling the script, it is generally a poor coding practice that should be avoided.

The behavior of hoisting in JavaScript varies somewhat:
-Calling a var before its initialization returns undefined.
-Calling a const or let before they are initialized returns a ReferenceError.
-Calling a function before its declaration works fine as long as the function is in scope.
-Calling a class before its declaration returns a ReferenceError.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Classes define the structure for type of object. By defining a class, different types of properties and methods, including default values, can be defined for use and re-use. The code then constructs an object using this class definition. When multiple instances of a given type of object are expected, consolidating them underneath a class definition provides predictable behavior and structure. Similarly, when multiple classes have significant overlap in properties and methods, inheritance allows consolidation of those properties and methods within a parent class.

2. Spread operator: The spread operator, represented in React with ellipses, simplifies array and object construction through deconstruction. When copying from one object/array into another, using the spread operator signals to a compiler to treat each element or key:value pair independently. This creates a more flat structure, vice stacking object/arrays within a nested hierarchy.

3. React state: State is a private and dynamic property of components in React. Components can render when their state updates, without forcing the entire page or application to re-render. This creates a more engaging environment with interesting and useful functionality.

4. React props: Props, short for properties, are data passed between components in React. React props are immutable, dynamic, data that define the behavior for their components.

5. DOM events: The document object model (DOM) captures events within an application or webpage. When an event is triggered (ie, when a user clicks on a button), a DOM event can trigger performance of designated functions. Common DOM events include a mouseover, mouseout, click, load, copy, drag, input, or keypress.
