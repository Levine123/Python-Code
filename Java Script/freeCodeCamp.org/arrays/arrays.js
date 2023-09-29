var myArrary = ["Liam", 16];
//nested array is an array inside an array
var ourArray1 = [["Vulls", 23], ["White Sox", 45]];

var myArray21 = [50,60,70];
var myData = myArray21[0]; // remember it starts with 0 so it refers with the first number, 50

var myArray3 = [18,64,99];
myArray3[0] = 45; // Array now equals [45,64,99]
console.log(myArray3) // 45,64,99

var myArray4 = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray4[2][1]; // gets 8

var myArray5 = [["John", 23], ["cat", 2]];
myArray5.push(["dog", 3]);
//myArray5 now equals all three but add dog, 3 onto the end

var myArray1 = [["John", 23], ["cat", 2]];
var removedFromMyArray1 = myArray1.pop(); // removes last part of the array
console.log(myArray1)
// therefore, this equals john 23


var myArray2 = [["John", 23], ["cat", 2]];
var removedFromMyArray2 = myArray2.shift(); //removes first part of the array 
console.log(myArray2)
// therefore, this equals cat, 2

var myArray3 = ["John", "kim", "cat", ];
ourArray3.shift(); //ourArray now removed the "john" part
ourArray3.unshift("Happy"); //unshift basically adds things to the first part os the string
// ourArray 3 now equals ["Happy", "kim", "cat"]