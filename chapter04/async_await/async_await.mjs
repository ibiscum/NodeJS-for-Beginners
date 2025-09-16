const asyncFun = async (generateError) => {
    if (generateError) {
        throw new Error("Error generated");
    }
    return 1;
};

asyncFun().then((result) => console.log(result));
asyncFun(true).catch((error) => console.log(error));

const asyncFunPromise =  (generateError) => new Promise((resolve, reject) => {
    if (generateError) {
        reject(new Error("Error generated"));
    }
    resolve(1);
});

asyncFunPromise().then((result) => console.log(result));
asyncFunPromise(true).catch((error) => console.log(error));

// Promises
fetch(' https://api.demo.foo/v1/todo')
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));

// Async/Await
const fetchData = async () => {
    try {
        const response = await fetch('https://api.demo.foo/v1/todo');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}
fetchData(); // [{userId: 1, id: 1, title: 'delectus aut autem', completed: false}]