var swords = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var arrows = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var pistols = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cannons = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var jokers = ["joker", "jester"];

var deck = [];

for (var i = 0; i < swords.length; i++) {
	deck.push("<div class='card'><p>" + swords[i] + "</p><img src='img/sword.png' alt='sword'></div>");
}
for (var i = 0; i < arrows.length; i++) {
	deck.push("<div class='card'><p>" + arrows[i] + "</p><img src='img/arrow.png' alt='arrow'></div>");
}
for (var i = 0; i < pistols.length; i++) {
	deck.push("<div class='card'><p>" + pistols[i] + "</p><img src='img/pistol.png' alt='pistol'></div>");
}
for (var i = 0; i < cannons.length; i++) {
	deck.push("<div class='card'><p>" + cannons[i] + "</p></p><img src='img/cannon.png' alt='canon'></div>");
}
for (var i = 0; i < jokers.length; i++) {
	deck.push("<div class='card'><p>" + jokers[i] + "</p><img src='img/joker.png' alt='jester-hat'></div>");
}

var discards = []
var click = 0;
var yourCardVal;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

shuffle(deck);

var oppoDeck = deck.splice(deck.length/2, deck.length/2);
var yourDeck = deck;

$("button").on("click", playGame)

function playGame(){
	click++;
	var randomIndex = Math.floor((Math.random() * deck.length));

	$("#you").empty();
	$("#you").append("<h3>Your Play:</h3>" + deck[randomIndex]);
	// discards.push(deck[randomIndex]);
	// deck.splice(randomIndex,1);
	var yourCard = $(".card").eq(0).text();

	$("#opponent").empty();
	$("#opponent").append("<h3>Opponent's Play:</h3>" + deck[randomIndex]);
	// discards.push(deck[randomIndex]);
	// deck.splice(randomIndex,1);
	var oppoCard = $(".card").eq(1).text()

	if (parseInt(yourCard) !== NaN && parseInt(oppoCard) !== NaN) {
		if (parseInt(yourCard) > parseInt(oppoCard)) {
			console.log("You win");
			winner = 
		} else {
			console.log("You lose");
		}
	}

	if (yourCard === "jack") {
		yourCardVal = 11;
	}
	else if (yourCard === "queen") {
		yourCardVal = 12;
	}
	else if (yourCard === "queen") {
		yourCardVal = 13;
	}
	else if (yourCard === "king") {
		yourCardVal = 14;
	}
	else if (yourCard === "jester" || yourCard === "joker") {
		yourCardVal = 0;
	} 
	else {
		yourCardVal = parseInt(yourCard);
	}


	if (oppoCard === "jack") {
		oppoCardVal = 11;
	}
	else if (oppoCard === "queen") {
		oppoCardVal = 12;
	}
	else if (oppoCard === "queen") {
		oppoCardVal = 13;
	}
	else if (oppoCard === "king") {
		oppoCardVal = 14;
	}
	else if (oppoCard === "jester" || oppoCard === "joker") {
		oppoCardVal = 0;
	} 
	else {
		oppoCardVal = parseInt(oppoCard);
	}

	if (yourCard > oppoCard) {
		console.log("You win cards")
	}
	else {
		console.log("You lose cards");
	}

}
