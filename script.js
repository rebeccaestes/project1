var swords = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var arrows = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var pistols = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cannons = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var jokers = ["joker", "jester"];

var deck = [];

for (var i = 0; i < swords.length; i++) {
	deck.push("<div class='card' id='sword'><p id='label'>" + swords[i] + "</p><img src='img/sword.png' alt='sword'></div>");
}
for (var i = 0; i < arrows.length; i++) {
	deck.push("<div class='card' id='arrow'><p id='label'>" + arrows[i] + "</p><img src='img/arrow.png' alt='arrow'></div>");
}
for (var i = 0; i < pistols.length; i++) {
	deck.push("<div class='card' id='pistol'><p id='label'>" + pistols[i] + "</p><img src='img/pistol.png' alt='pistol'></div>");
}
for (var i = 0; i < cannons.length; i++) {
	deck.push("<div class='card' id='cannon'><p id='label'>" + cannons[i] + "</p><img src='img/cannon.png' alt='canon'></div>");
}
for (var i = 0; i < jokers.length; i++) {
	deck.push("<div class='card' id='joker'><p id='label'>" + jokers[i] + "</p><img src='img/joker.png' alt='jester-hat'></div>");
}

// var discards = []

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

var yourCardVal, oppoCardVal, yourCard, oppoCard;

var click;
$("#start").on("click", regularPlay)

function regularPlay(){
	click++
	$("#start").text("Continue playing");
	$("#peacehover").empty();
	$("#you").empty();
	$("#oppo").empty();
	$("#you").append("<h3>Your Play:</h3>");
	$("#oppo").append("<h3>Opponent's Play:</h3>");

	$("#you").append(yourDeck[0]);
	yourCard = $(".card").eq(0).text();

	$("#oppo").append(oppoDeck[0]);
	oppoCard = $(".card").eq(1).text();

	whoWins(yourCard, oppoCard);
}

function whoWins(yourCard, oppoCard) {
	if (yourCard === "jack") {
		yourCardVal = 11;
	}
	else if (yourCard === "queen") {
		yourCardVal = 12;
	}
	else if (yourCard === "king") {
		yourCardVal = 13;
	}
	else if (yourCard === "ace") {
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
	else if (oppoCard === "king") {
		oppoCardVal = 13;
	}
	else if (oppoCard === "ace") {
		oppoCardVal = 14;
	}
	else if (oppoCard === "jester" || oppoCard === "joker") {
		oppoCardVal = 0;
	} 
	else {
		oppoCardVal = parseInt(oppoCard);
	}

	if (yourCardVal > oppoCardVal) {
		var winner = "you";
		$("#results").html("<p>Your " + yourCard + " is higher than your opponent's " + oppoCard + ", so you won these cards!</p><p>You have " + yourDeck.length +" cards, and your opponent has " + oppoDeck.length + ".</p>");
		for (var i = 0; i < $(".card").length; i++) {
			yourDeck.push("<div class='card'>" + $('.card').eq(i).html() + "</div>");
		}
		yourDeck.splice(0, 1);
		oppoDeck.splice(0, 1);
		if (yourDeck[0] === undefined || oppoDeck[0] === undefined) {
			console.log("GAME OVER");
		}
	}
	else if (yourCardVal < oppoCardVal){
		var winner = "opponent";
		$("#results").html("<p>Your " + yourCard + " is lower than your opponent's " + oppoCard + ", so you lost these cards :(</p>");
		for (var i = 0; i < $(".card").length; i++) {
			oppoDeck.push("<div class='card'>" + $('.card').eq(i).html() + "</div>");
		}
		yourDeck.splice(0, 1);
		oppoDeck.splice(0, 1);
		if (yourDeck[0] === undefined || oppoDeck[0] === undefined) {
			console.log("GAME OVER");
		}
	}
	else if (yourCardVal === oppoCardVal) {
		$("#results").html("<h2>War breaks out!</h2>");
		$("#march").css("display", "inline");
		$("#start").css("display", "none");
		$("#march").on("click", wageWar);
		console.log(yourDeck[0], yourDeck[1], yourDeck[2], yourDeck[3]);
	}
	return winner;
}

function wageWar() {
	$("#march").css("display", "none");

	$("#you").empty();
	$("#oppo").empty();

	$("#you").append("<h3>Your Play:</h3>");
	$("#oppo").append("<h3>Opponent's Play:</h3>");

	$("#you").append(yourDeck[0]);
	$("#you").append(yourDeck[1]);
	$("#you").append(yourDeck[2]);
	$("#you").append(yourDeck[3]);
	$("#you").append(yourDeck[4]);
	yourDeck.splice(0, 4);
	yourCard = $(".card").eq(4).text();
	for (var i = 1; i < 4; i++) {
		$(".card").eq(i).css("background", "black").addClass("lost");
	}

	$("#oppo").append(oppoDeck[0]);
	$("#oppo").append(oppoDeck[1]);
	$("#oppo").append(oppoDeck[2]);
	$("#oppo").append(oppoDeck[3]);
	$("#oppo").append(oppoDeck[4]);
	oppoDeck.splice(0, 4);
	oppoCard = $(".card").eq(9).text();
	for (var i = 6; i < 9; i++) {
		$(".card").eq(i).css("background", "black").addClass("lost");
	}

	$(".lost").hover( function() {
		$(this).css("background", "grey");
	},
	function() {
			$(this).css("background", "black");
	})

	$("#start").css("display", "inline");

	var winner = whoWins(yourCard, oppoCard);

	if (winner === you) {
		$("#peacehover").html("<p>Peace declared! Hover over the black cards to see which ones you won - and kept>:).</p>");
	} else {
		$("#peacehover").html("<p>Peace declared ... but at what price? Hover over the black cards to see what you lost.</p>");
	}

	// }
	

}