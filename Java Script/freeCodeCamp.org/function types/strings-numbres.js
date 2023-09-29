function convertToInteger(str) {
    return parseInt(str, 2); // parse int function makes a string that is a number a literal number, 2 tells system that it is binary and makes it decimal
}
console.log(convertToInteger("10011"));