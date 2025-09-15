// Commenting JavaScript code

// Single line comment
/*
Multiline
comment
*/

// Printing values and debugging
const data = {
    nestedData: {
        moreNestedData: {
            value: 1
        }
    }
};

console.log(data); // [object, object]
console.log(JSON.stringify(data)); // {"nestedData":{"moreNestedData":{"value":1}}}

// Variables and constants

// let versus const
let userName = "Joe Doe";
console.log(userName); // Joe Doe

userName = "Jane Doe";
console.log(userName); // Jane Doe

const userName2 = "Joe Doe";
console.log(userName2); // Joe Doe
// userName2 = "mary"; // TypeError: Assignment to constant variable.

const user = {
    name: "Joe Doe"
}
console.log(user.name); // Joe Doe

user.name = "Jane Doe";
console.log(user.name); // Jane Doe

// user = "Mr. Joe"; // TypeError: Assignment to constant variable.

// Exploring numbers
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

let impreciseOperation = 0.1 + 0.2;
let result = Number(impreciseOperation.toPrecision(1)) === 0.3; // true
console.log(result);

// Assignment operators
let a = 5;
console.log(a++); // 5
console.log(a);   // 6
console.log(++a); // 7
console.log(a);   // 7

// Exploring Dates object
const jsDateAnnouncement = new Date(818031600000);
console.log(jsDateAnnouncement);

const currentDate = new Date();
console.log(currentDate);

const diff = jsDateAnnouncement - currentDate;
console.log(diff);

const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
});
console.log(formatter);

const diffInDays = Math.round(diff / 86400000);
console.log(diffInDays);

const diffInYears = Math.round(diffInDays / 365);
console.log(diffInYears);

const diffInText = formatter.format(diffInDays, 'day');
console.log(diffInText);

console.log(`JavaScript was presented to the world ${formatter.format(diffInDays, 'day')}`);
// JavaScript was presented to the world 10,094 days ago
console.log(`JavaScript was presented to the world ${formatter.format(diffInYears, 'year')}`);
// JavaScript was presented to the world 28 years ago.

// Conditional statements

// Equality operators
console.log([1,2] === [1,2]); // false
console.log({ name: 'John' } === { name: 'John' }); // false
console.log(NaN === NaN); // false

console.log(1 == '1'); // true
console.log(1 != '1'); // false

// Logical operators
const num = 2
console.log((num == 2) && (3 >= 6)); // false
console.log((num > 3) || (17 <= 40)); // true

// The NOT operator (!)
console.log(!true); // false
console.log(!false); // true

// Equality in JavaScript
// The truthy values:
console.log("String:", Boolean("Ulises"));
console.log("1235:", Boolean(1235));
console.log("-1235:", Boolean(-1235));
console.log("Object:", Boolean({text: "hi"}));
console.log("Array:", Boolean(["apple", -1, false]));
console.log("Function:", Boolean(function(){}));
console.log("Arrow function:", Boolean(() => {}));

// The falsy values:
console.log("Empty string:", Boolean(""));
console.log("0:", Boolean(0));
console.log("-0:", Boolean(-0));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));

function checkValue(value) {
    if(!value) {
        throw new Error ("The value is invalid! Try again.")
    }
}

checkValue(1);

// The nullish coalescing operator (??)
const fullName = null ?? "John Joe";
console.log(fullName); // John Joe

// The if statement
const condition = true;
const condition2 = true;
if(condition) {
    console.log("The condition is true");
} else if (condition2) {
    console.log("The condition2 is true");
} else {
    console.log("The condition and condition2 are false");
}

// const condition3 = true;
// if(condition3) {
//     return console.log("The condition is true");
// }
// console.log("The condition is false");

// The switch statement
const extension = ".md";
switch (extension) {
    case ".doc":
        console.log("This extension .doc will be deprecated soon");
    case ".pdf":
    case ".md":
    case ".svg":
        console.log("Congratulations! You can open this file");
        break;
    default:
        console.log(`${extension} is not supported`);
}

// Ternary operator
const isMember = true;
console.log(`The payment is ${isMember ? "20.00€" : "50.00€"}`); // The payment is 20.00€

// Understanding loops

// while
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
};

// do...while
i = 0;
do {
    console.log(`i value: ${i}`);
    i++;
} while (false); // i value: 0

// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0, x = 1, z = 2, limit = 10; i <= limit; x *= z, i++ ) {
    console.log(`i: ${i}. x: ${x}. z: ${z}`);
}
// i: 0. x: 1. z: 2
// ...
// i: 10. x: 1024. z: 2

let x = 1;
const z = 2, limit = 10;
for (let i = 0; i <= limit; i++ ) {
    console.log(`i: ${i}. x: ${x}. z: ${z}`);
    x *= z
}

// Using strings in JavaScript
console.log('Hello World');
console.log("Hello World");
console.log(`Hello World`);

const firstName = "John";
console.log(`Hello ${firstName}!`) // Hello John!

// Exploring arrays
const array = [1, 2, 3];
console.log(Array.isArray(array)); // true

const object = { name: "Ulises" };
console.log(Array.isArray(object)); // false
console.log(typeof array); // object
console.log(typeof object); // object
console.log("are object and array the same type?", typeof(array) === typeof(object)); // true

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log(array1 === array2); // false

const emptyArray = [];
let numbers = [1, 2, 3];
const strings = ["Hello", "World"];
const mixed = [1, "Hello", true];

const arrayOne = Array.of( 1, 2, 3 );
console.log(arrayOne);

console.log(Array.from('packt')); // ['p', 'a', 'c', 'k', 't']

console.log([...[1, 2, 3]]); // [1, 2, 3]
console.log([...'packt']); // ['p', 'a', 'c', 'k', 't']

console.log([...[1, 2, 3]]); // [1, 2, 3]
console.log([...'packt']); // ['p', 'a', 'c', 'k', 't']

console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]

const fruits = ['banana', 'apple', 'orange'];
console.log(fruits[0]); // banana
console.log(fruits[1]); // apple
console.log(fruits[2]); // orange

fruits[0] = 'pear';
console.log(fruits); // ['pear', 'apple', 'orange']

// Iterating over an array
numbers = [1, 2, 3, 4, 5]
const mapTransformation = numbers.map(el => el * 10)
const forEachTransformation = []
numbers.forEach(el => {
    forEachTransformation.push(el * 10)
})
console.log(mapTransformation) // 10,20,30,40,50
console.log(forEachTransformation) // 10,20,30,40,50

numbers = [1, 2, 3, 4, 5]
const filteredNums = numbers.filter(el => el <= 3)
console.log(filteredNums) // [1, 2, 3]

const dataTwo = [1, [2, 3], [4, 5]];
const flatData = dataTwo.flat();
console.log(flatData); // [1, 2, 3, 4, 5]

const people = ['Joe', 'Jane', 'John', 'Jack'];
console.log(people.join()); // Joe,Jane,John,Jack
console.log(people.join(' + ')); // Joe + Jane + John + Jack

const structuredPeople = people.map(person => `<li>${person}</li>\n`);
console.log(`
    <ul>
        ${structuredPeople.join('')}
    </ul>
`)

// <ul>
//     <li>Joe</li>
//      ...
// </ul>

numbers = [7, 1,10, 3,15,20]
console.log(numbers.sort())
// [1, 10, 15, 20, 3, 7]
console.log(numbers.sort((a, b) => a - b))
// [1, 3, 7, 10, 15, 20]

const list = [1, 2];
const d = list[0] || 0; // 1
const b = list[1] // 2
const c = list[2] || 4; // 4

const [ e = 0, f, g = 4 ] = list;

let arr = [1,2,2,3,1,4,5,4,5]
let set = new Set(arr)
let uniques = Array.from(set)
console.log(uniques) // [1,2,3,4,5]

// Using objects in JavaScript

const person = {}