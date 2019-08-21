var pokemon = [
    "pikachu",
    "snorlax",
    "charizard",
    "haunter",
    "mew",
]

var goal = pokemon[Math.floor(Math.random()*pokemon.length
)];

var answerPokemon = [];
for (var i=0; i< pokemon.length; i++) {
    answerPokemon[i] = "_";
}

var remainingLetters = word.length;