var pokemon = [
    "pikachu",
    "snorlax",
    "charizard",
    "haunter",
    "mew",
]

var answerPokemon= "";
var letters = [];
var blankLetters = 0;
var progress = [];
var wrong = [];
var wins = 0;
var losses = 0;
var remaining = 10;

function guessingGame (){
var goal = pokemon[Math.floor(Math.random()*pokemon.length
)];

letters = goal.split("");

blankLetters = letters.length;

for (var i=0; i< blankLetters; i++) {
    progress.push("_");
}

document.getElementsByClassName("guessing-field").innerHTML= " " progress.join(" ");

var guessChecker = false;

var answerPokemon = [];
for (var i=0; i< pokemon.length; i++) {
    answerPokemon[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {

     
 document.onkeypress = function() {
 
    for (var j= 0; j < word.length; j++) {
        if (goal[j] === guess) {
            answerPokemon[j] = guess;
            remainingLetters--;

        }
        ]
    }
}