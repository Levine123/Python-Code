// Understaind Bracket Notation
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": [],
};
ourDog.name = "Cooper" // changes the name of the dog
console.log(ourDog.name) // .first property will get you the second property
result = "The dogs name is " + ourDog["name"] // furthermore you can look it up like this left to right
console.log(result) // prints what you look up

// Looking up data with functions using Bracket Notation
function phoneticLookup(val) {
    var result = ""; // defines result too a value


    var lookup = { // all the little informations
        "alpha": "Adams",
        "brave": "Boston", 
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
    result = lookup[val]; // must put brackets and not ()
    return result;
}
console.log(phoneticLookup("alpha"));

// Check for a property under a name
var myObj = {
    "alpha": "daddy Adams",
    "brave": "Boston", 
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
}
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
    return "Not Found" 
    }
}
console.log(checkObj("alpha")); 

//Nested objects 
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2264": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    } 
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []
    } else {
        collection[id][prop] = value;
    }

    return collection; 
}

console.log(updateRecords("5439", "artist", "ABBA"));