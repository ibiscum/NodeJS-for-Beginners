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