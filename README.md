# Space State

A state-management tool for javascript applications.

```js
const { createState } = require('space-space')

const names = createState([]);

console.log(names.getState()) // []

names.setState(["Aditya"]);

console.log(names.getState()) // [ "Aditya" ]

names.setState(prev => ([...prev, "Jake"]));

console.log(names.getState()) // [ "Aditya", "Jake" ]

```
