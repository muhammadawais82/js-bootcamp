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