import { readFile } from 'fs/promises';

/* fetch('https://api.demo.foo/v1/todo')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));
*/

const setTimeoutPromise = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

console.log('Before setTimeoutPromise');
setTimeoutPromise(1000).then(() => console.log('one second later'))
console.log('After setTimeoutPromise');

// readFile("./docs.md")
// .then(convertMarkdownToHTML) // shortcut for .then(mdContent => convertMarkdownToHTML(mdContent))
// .then(addCssStyles)
// .then(docs => saveFile(docs, "docs.html"))
// .then(ftp.sync)
// .then(result => {
// // ... other things
// })
// .catch(error => console.log(error));

const randomTimeOutPromise = () => {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 100);
        setTimeout(() => {
            console.log(`Promise resolved after ${time}ms`);
            resolve(time);
        }, time);
    });
};

Promise.all([
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
]).then((results) => {
    console.log("results:", results);
});

Promise.race([
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
    randomTimeOutPromise(),
]).then((result) => {
    console.log("result:", result);
});

const generatePromise = shouldFail => {
    return new Promise((resolve, reject) => {
        if (shouldFail) {
            return reject(new Error("Rejected!"));
        }
        resolve("Success!");
    });
};

// generatePromise(true).catch(error => console.log("Error message:", error));
// Error message: Error: Rejected!
// ...

// generatePromise(true)
// .then(result => console.log("Result:", result))
// .catch(error => console.log("Error message:", error))
// .finally(() => console.log("Promise settled"));

generatePromise()
.then(generatePromise)
.then(result => {
    return generatePromise(true);
})
.then(() => console.log("This will not be called"))
.catch(error => console.log("Error message:", error));