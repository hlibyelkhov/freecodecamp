/* Comments are lines of code that JavaScript will intentionally ignore. Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript: */

// This is an in-line comment.

/* This is a
multi-line comment */



/* In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.

For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

Variables allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the eight data types may be stored in a variable.

Variables are similar to the x and y variables you use in mathematics, which means they're a simple name to represent the data we want to refer to. Computer variables differ from mathematical variables in that they can store different values at different times.

We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

var ourName;
creates a variable called ourName. In JavaScript we end statements with semicolons. Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number. */

var myName;

/* In JavaScript, you can store a value in a variable with the assignment operator (=).

myVariable = 5;
This assigns the Number value 5 to myVariable.

If there are any calculations to the right of the = operator, those are performed before the value is assigned to the variable on the left of the operator.

var myVar;
myVar = 5;
First, this code creates a variable named myVar. Then, the code assigns 5 to myVar. Now, if myVar appears again in the code, the program will treat it as if it is 5. */

// Setup
var a;
a = 7;
// Only change code below this line

/* After a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator.

var myVar;
myVar = 5;
var myNum;
myNum = myVar;
The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5. */

// Setup
var a;
a = 7;
var b;
b = 7;
b = a;
// Only change code below this line


/* It is common to initialize a variable to an initial value in the same line as it is declared.

var myVar = 0;
Creates a new variable called myVar and assigns it an initial value of 0. */

var a = 9;

/* Previously you used the following code to declare a variable:

var myName;
But you can also declare a string variable like this:

var myName = "your name";
"your name" is called a string literal. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes. */

var myFirstName = "Hlib";
var myLastName = "Yelkhov";

/* When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a string of undefined.
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined. */

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";


/* In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

MYVAR is not the same as MyVar nor myvar. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Examples:

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

Modify the existing declarations and assignments so their names use camelCase.

Do not create any new variables.*/

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

If you replace var with let in the code above, it results in an error:

let camper = "James";
let camper = "David";
The error can be seen in your browser console.

So unlike var, when you use let, a variable with the same name can only be declared once.

Update the code so it only uses the let keyword.*/

let catName = "Oliver";
let catSound = "Meow!";

/* The keyword let is not the only new way to declare variables. In ES6, you can also declare variables using the const keyword.

const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
The console will display an error due to reassigning the value of FAV_PET.

You should always name variables you don't want to reassign using the const keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.

Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays). You will learn more about objects, arrays, and immutable and mutable values in later challenges. Also in later challenges, you will see examples of uppercase, lowercase, or camelCase variable identifiers.
Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables. */

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

/* Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + symbol as an addition operator when placed between two numbers.

Example:

const myVar = 5 + 10;
myVar now has the value 15.

Change the 0 so that sum will equal 20.*/

const sum = 10 + 10;

/* We can also subtract one number from another.

JavaScript uses the - symbol for subtraction.

Example

const myVar = 12 - 6;
myVar would have the value 6.

Change the 0 so the difference is 12.*/

const difference = 45 - 33;

/* We can also multiply one number by another.

JavaScript uses the * symbol for multiplication of two numbers.

Example

const myVar = 13 * 13;
myVar would have the value 169.


Change the 0 so that product will equal 80.*/

const product = 8 * 10;

/* We can also divide one number by another.

JavaScript uses the / symbol for division.

Example

const myVar = 16 / 2;
myVar now has the value 8.

Change the 0 so that the quotient is equal to 2.*/

const quotient = 66 / 33;

/* You can easily increment or add one to a variable with the ++ operator.

i++;
is the equivalent of

i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign. 

Change the code to use the ++ operator on myVar.*/

let myVar = 87;

// Only change code below this line
myVar++;

/* You can easily decrement or decrease a variable by one with the -- operator.

i--;
is the equivalent of

i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.

Change the code to use the -- operator on myVar.*/

let myVar = 11;

// Only change code below this line
myVar--;

/* We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

Note: when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. If you are getting one of these results, open a topic on the freeCodeCamp forum.

Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7). */

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal = 3.14;

/* In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

Let's multiply two decimals together to get their product. 

Change the 0.0 so that product will equal 5.0. */

const product = 2.5 * 2;

/* Now let's divide one decimal by another.

Change the 0.0 so that quotient will equal to 2.2.*/

const quotient = 4.4 / 2.0; // Change this line


