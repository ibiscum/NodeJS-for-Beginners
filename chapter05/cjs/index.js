const utils = require('./utils.js');

utils.sayHello();
utils.sayGoodbye();

const user = require('./user.json');
console.log(user);
// { name: 'John', lastName: 'Doe' }