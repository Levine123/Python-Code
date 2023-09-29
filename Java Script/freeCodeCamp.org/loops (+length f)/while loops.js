var myArray = [];
var i = 0
while(i < 5) {
    myArray.push(i);
    i++;
} 
console.log(myArray) // [ 1, 2, 3, 4, 5 ]

var daddysArray = [];

for (var i = 0; i > -10; i -= 2) { // value of i = (0) // while i is (less than) (5) // add (2) to i. () means it can be changed
    daddysArray.push(i)
}
console.log(daddysArray)

// Building Of An Array
var ourArr = [1, 10, 11, 12, 19, 41, 50];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

function multiplyAll(arr) {
    var product= 1;
    for (var i=0; i < arr.length; i++) { // first time: length is 3, i = 0, but once its done its 1 //
        for (var j=0; j <arr[i].length; j++) { // first time: length is 2, j = 0, but once its done its 1 //
            product *= arr[i][j] // 1 * arr[0][0] = 1 = 1, but you gonna keep doing this until it gets through all the numbers
        }
    }
    return product;
}
var stringConvert = multiplyAll(([[1,2],[3,4],[5,6,7,8]]))
console.log(stringConvert)

console.log("ignore") // ignore lol
x=(([[1,2],[3,4],[5,6,7]]))
console.log(x[1].length) // = 2, dont put brackets inside of brackets like python
console.log(x[0][0]) // = 1

