// Switch Function
function caseInSwitch(val) { // creates function
    var answer = ""; // creates variable 'answer'
    switch (val)  {
        case 1: // if value pasted in is ===1, system returns alpha
            answer = "alpha"
            break;
        case 2: // if value pasted in is ===2, system returns beta
            answer = "beta";
            break;
        case 3: // if value pasted in is ===3, system returns charlie
            answer = "charlie";
            break;
        case 4: // if value pasted in is ===4, system returns delta
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4)) // will return delta

// Switch Function With Numbers
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
          answer = "Low";
          break;
        case 4:
        case 5:
        case 6:
          answer = "Mid";
          break;
        case 7:
        case 8:
        case 9:
          answer = "High";
          break;
    }
    return answer;
}
console.log(sequentialSizes(8)); 

// Random Switch Function Jokes
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley"
            break;
        case 42: 
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        
    }
    
    return answer;
}
console.log(chainToSwitch(7))


// Switch Function For Counting Blackjack Cards
var count = 0;
function cc(card) {
    switch(card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break; // must break cases idk why tho
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break; // must break cases idk why tho
    }

    var holdbet = "Hold"
            if (count > 0) {
            holdbet = "Bet"
        }    
    return holdbet;
                   
}
console.log(cc(1));
