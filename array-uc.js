var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
var hasEnoughPlayers = function(team){
    return team.length == 7;
}
console.log(hasEnoughPlayers(team));

////////////////////////////////
//push method
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);
console.log(crew);

//////////////////////////////////

//foreach method for arrays

var myname = ["asad","ali", "awais"];

myname.forEach(function (namee) {
    namee +="Muhammad";
    namee = namee.toUpperCase();
    console.log(namee)
});

//other example
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
    console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/////////////////////////////////////////

///////////////////////////////////////////
//map method
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function (donut) {
    donut += " hole";
    donut = donut.toUpperCase();
    return donut;
});


console.log(improvedDonuts)

///////////////////////////////
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var newBills = bills.map(function(bill){
    bill += 0.15;
    return bill;
});
console.log(newBills);

