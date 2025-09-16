(function () {
    // ...some code here
})();

(async () => {
    const response = await fetch(' https://api.demo.foo/v1/todo ');
    const json = await response.json();
    console.log(json);
})()