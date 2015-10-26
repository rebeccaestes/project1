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
	deck.push("<div class='card'><p>" + arrows[i] + "</p><img src='img/arrow.png' alt='sword'></div>");
}
for (var i = 0; i < pistols.length; i++) {
	deck.push("<div class='card'><p>" + pistols[i] + "</p><img src='img/pistol.png' alt='sword'></div>");
}
for (var i = 0; i < cannons.length; i++) {
	deck.push("<div class='card'><p>" + cannons[i] + "</p></p><img src='img/cannon.png' alt='sword'></div>");
}
for (var i = 0; i < jokers.length; i++) {
	deck.push("<div class='card'><p>" + jokers[i] + "</p><img src='img/joker.png' alt='sword'></div>");
}
// for (var i = 0; i < $(".card").length; i++) {
// 	deck.push($(".card").eq(i));
// }

var discards = []

var click = 0;

$("button").on("click", playGame)

function playGame(){
	click++;
	var randomIndex = Math.floor((Math.random() * deck.length));

	$("#you").empty();
	$("#you").append("<h3>Your Play:</h3>" + deck[randomIndex]);
	discards.push(deck[randomIndex]);
	deck.splice(randomIndex,1);
	var yourCard = $(".card").eq(0).text()
	if (yourCard === "jack") {
		yourCardVal = 11;
	}

	$("#opponent").empty();
	$("#opponent").append("<h3>Opponent's Play:</h3>" + deck[randomIndex]);
	discards.push(deck[randomIndex]);
	deck.splice(randomIndex,1);
	var oppoCard = $(".card").eq(1).text()

	console.log("Discards: " + discards.length);
	console.log("Deck: " + deck.length);
	return click;

	// function whoWins() {
	// 	}
}