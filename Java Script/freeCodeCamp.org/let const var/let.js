// var values can be modified and changed overtimee
// let and const values cannot be modified in the same area, insidew function -> outside, then can
    // let values also only last in the specific area they were made. (directly outside or inside function etc). global and local does not work with var
// const values CANNOT BE CHANGED OR REASSIGNED
var catNam2e = "Quincy"
var catNam2e = "Beaner"
// console.log(catNam2e)
// WILL WORK BUT if var = let it would give you can error saying two values

function catTalk() {
    "use strict"; // catches let, var, and const common doing mistakes

}
// Understanding let 
function checkScope() {
    "use strict";  // helps find var, let, const errors
    let i = "function scope"; // i's is initally defined as function scope
    if (true) {
        let i = "block scope"; // i is changed too block scope, but while inside the if statement
        console.log("Block scope is " + i);
    }
    console.log("Function scope i is " + i)
}
// console.log(checkScope()); 

function checkScope() {
    "use strict"; // helps find var, let, const errors
    var i = "god scope"; // always god scope becasue it was declared as a var and not a let
    if (true) {
        i = "lol scope"; // i's value continues as lol scope even when outside
        console.log("lol scope is " + i);
    }
    console.log("god scope is " + i)
}
// console.log(checkScope()); 

function printManyTimes(times, nameFirst, nameLast) {
    "use strict";
    const SENTENCE = nameFirst + " " + nameLast + " is a giga chad" // as long as SENTENCE is not declared again, it will work
        for (var i = 0; i <= times; i++) {
            console.log(SENTENCE);
        }
}

console.log(printManyTimes(10, "Tom", "Buchanan"));