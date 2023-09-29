// Example 1 
function ourFunctionWithArgs(a,b,c) { // function that requires three input values
 urMom = (a + b - c); // given the info below, 7+1-6=2
 return urMom; // returns the value of urMom
}
console.log(ourFunctionWithArgs(7,1,6)); 

// Example 2
function nextInLine (arr, item) {
    arr.push(item) // adds the item value onto the array
    return arr.shift(); // returns shift'd item
}

var daddyArray = [1,2,3,4,5]; // creates a defined and changedable array
console.log("before: " + JSON.stringify(daddyArray)); // gonna convert the array to a string, then pass it 
console.log(nextInLine(daddyArray, 6)); // sends the array and number 6 into the function to be modified
console.log("after: " + JSON.stringify(daddyArray)); // prints the modifications done by above function

// Example 3 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " +myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb // " " is needed as a space
    return result;
}

console.log(wordBlanks("liam", "yellow", "ran", "quickly"));
// The Yellow Liam Ran to the store quickly
console.log(wordBlanks("jason", "fat", "jogged", "slowly"));

var myList = [["cereal", 3], ["milk", 2], ["bananas, 3"], ["juice, 2"], ["eggs", 12]]; 
//shopping list


