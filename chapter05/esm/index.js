import {sayHello} from './utils.js';
sayHello();

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const user = require("./user.json");
console.log(user);
// { name: 'John', lastName: 'Doe' }