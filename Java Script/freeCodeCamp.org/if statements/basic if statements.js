// Every Operator Used In If Statements
// == : equal to (abstract)
// != : not equal (abstract)
// === : equal (strict)
// !== : equal (strict)
// > : greater than
// < : less than
// >= : greater than or equal too
// <= : less than or equal too
// && : and/aswell as 
// || : or (+if this does not exist use:)

// ==, ===, 
function testStrict(val) {
    if (val === 3) { // value must be exactly 3 as an integer
        return "Equal"; // if it is, "equal" will be return
    }
    return "Not Equal"; // if not, not equal will be returned
}
console.log(testStrict('3')); // TRUE OR FALSE? use info below for help

// !=, !==
function testNotEqual(val) { // also works with strictTestNotEqual
    if (val != 12) { // != not strict operator, !== strict operator
    return "not equal";
    }
    return "equal";
}
console.log(testNotEqual(12)) // equal 

// <, >
function testLessThan1(val) {
    if (val < 1) { 
        return "less than 1";
    }

    if (val < 10) {
        return "less than 10";
    }

    if (val < 100) {
        return "less than 100";
    }

    if (val < 1000) {
        return "less than 1000";
    }

    if (val < 10000) {
        return "less than 10000";
    }
}
console.log(testLessThan1(5)) // less than ten

// <=, >=
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) { // && is 'and'
    return "Less Than 50 And Greater than 25";
    }
    return "Not Less Than 50 And Greater than 25";
}
console.log(testLogicalAnd(30)) // is 
console.log(testLogicalAnd(60)) // not

// ||
function Or(val) {
    if (val < 10 || val > 20) { // || is 'or'
    return "Outside x<10 & x>20";
}
    return "Inside 10-20";

}
console.log(Or(15)) // Inside

