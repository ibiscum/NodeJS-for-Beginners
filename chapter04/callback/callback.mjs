const doSomething = (cb) => {
    console.log('Doing something...');
    cb();
};

const nextStep = () => {
    console.log('Callback called');
};

doSomething(nextStep);

// doSomething(nextStep());
// Callback called
// Doing something...
// Error: cb is not a function

doSomething(() => {
    console.log('Callback called anonymous');
});

const calculateNameLength = (name, cb) => {
    const length = name.length;
    cb(length);
};

calculateNameLength('John', (length) => {
    console.log(`The name length is ${length}`); // The name length is 4
});

// setTimeout
console.log('Before setTimeout');
const secondInMilliseconds = 1000;
setTimeout(() => {
    console.log('A second has passed');
}, secondInMilliseconds);
console.log('after setTimeout');

// setInterval
// let totalExecutions = 0
// console.log('Before setInterval');

// let te = setInterval(() => {
//         totalExecutions++;
//         console.log(`A second has passed, this is the ${totalExecutions} execution`);
//         if (totalExecutions > 5) {
//             clearInterval(te);
//         }
//     }, secondInMilliseconds);
//     console.log('After setInterval');

const doSomethingTwo = (cb) => {
    const error = new Error('Something went wrong');
    cb(error, null);
};

doSomethingTwo((error, result) => {
    if (error) {
        console.log('There was an error');
        return;
    }
    console.log('Everything went well');
});

const doSomethingThree = (cb) => {
    const result = 'It worked!';
    cb(null, result);
};

doSomethingThree((error, result) => {
    if (error) {
        console.log('There was an error');
        return;
    }
    console.log(result);
    console.log('Everything went well');
});
