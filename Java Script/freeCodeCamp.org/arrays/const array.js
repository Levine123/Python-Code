// objects or arrays can still be mutated by const values
const s = [5, 7, 2]
function editInPlace() {
    "use strict";
    s[0]=2 // can change with bracket notation
    s[1]=3
    s[2]=1.5
    return s;
}
console.log(editInPlace())

// Object freeze
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        pi : 3.14
    };
    Object.freeze(MATH_CONSTANTS) // stops the value from being changed below

    try {
        MATH_CONSTANTS.Pi = 99;
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS; // will be returned as 3.14 cause the object is frozen
}
console.log(freezeObj())

