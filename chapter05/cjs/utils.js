// function sayHello() {
//     console.log('Hello world');
// }

// module.exports = sayHello;

// You can export directly
exports.sayHello = () => {
    console.log('Hello world');
}

function sayGoodbye() {
    console.log('Goodbye world');
}
// You can also export using references
exports.sayGoodbye = sayGoodbye;