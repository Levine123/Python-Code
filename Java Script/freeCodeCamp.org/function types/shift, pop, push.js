//Using Push Function To Add To The End Of An Array
var OurArray = ["Daddy", "J", "cat"]; // creates an array
console.log(OurArray) // prints what is known
//CONSOLE: [ 'Daddy', 'J', 'cat' ]
OurArray.push(["poopy", "smelly", "stinky"]); // using push function
console.log(OurArray) // prints what is known
// CONSOLE: [ 'Daddy', 'J', 'cat', [ 'poopy', 'smelly', 'stinky' ] ]
// It adds exactly what it is told too add so if you remove big, bolded brackets above…
// CONSOLE:[ 'Daddy', 'J', 'cat', 'poopy', 'smelly', 'stinky' ]


// Using Shift function To Remove The First element In An Array
var OurArray = ["Daddy", "J", "cat"]; // creates an array
var removedFromOurArray = OurArray.shift([0]) + " Was Removed From The Array" // sets the removed value too this variable
 
console.log(OurArray) // CONSOLE: [ 'J', 'cat' ]
console.log(removedFromOurArray) // CONSOLE: Daddy Was Removed From The Array

// Using Pop Function To Remove The Final Element In An Array
var OurArray = ["Daddy", "J", "cat"]; // creates an array
var removedFromOurArray = OurArray.pop() + " Was Removed From The Array" // sets the removed value too this variable
 
console.log(OurArray) // CONSOLE: [ 'Daddy', 'J' ]
console.log(removedFromOurArray) // CONSOLE: cat Was Removed From The Array