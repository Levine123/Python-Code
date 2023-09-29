var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // floor rounds the value down, random makes a random number form 0<x<1 
function randomWholeNum() {
    return Math.floor(Math.random()*10);
}
console.log(randomWholeNum());

// Min * Max

function ourRandomRange(ourMin, ourMax) {
    return (Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin);                      // (0.9)(5-3+1)+3=5//(0.1)(5-3+1)=0+3=3
} 
console.log(ourRandomRange(5,15));