// Allow any amount of arguements to be passed over
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));
// Rest Operator
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a,b) => a + b, 0);
    };
})();

console.log(sum(1,2,3,4,5,6,7,8,9)) // sending these numbers too the function
// Can copy array data and make different
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"]
let arr2;
(function() {
    arr2 = [...arr1]; // copys data from arr2 and applys it too arr1
    arr1[0] = 'potato'
})();
console.log("arr1 is " + arr1)
console.log("arr2 is " + arr2)

// Destructuring Assignment
const AVG_TEMPERATURES = {
    "today": 77.5,
    "tommorow": 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const {"today" : tempOfTomorrow } = avgTemperatures
    return tempOfTomorrow 
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // You can assign values using destructering 
console.log(z, x, y); // values line up with the const 

let a = 8, b= 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log((a))
console.log((b))

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    

    const [ , ,...arr] = list;
        return arr
}
const arr = removeFirstTwo(source);
console.log(arr)
console.log(source);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function() {
    return function half(stats) {
        return (stats.max + stats.min) / 2.0;
};
})();
console.log(stats);
console.log(half(stats));

const person = {
    name: "Daddy Johnson",
    age: 56
};
//YOU gotta use  `````` sign above tab

const greeting = `Hello, my name is ${person.name}
I am ${person.age} years old.`;
console.log(greeting)

const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    };
};
// this code equals

const samePerson = (name, age, gender) => ( {name, age, gender} );

console.log(createPerson('Liam',16,'M'));
console.log(samePerson('Liam',16,'M'));

// Class syntax using constructor() <- function
class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    };   
};
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)