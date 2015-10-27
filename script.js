// Deck and contents
var deck = [];

var swords = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var arrows = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var pistols = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cannons = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var jokers = ["joker", "jester"];

// Make deck, with card formatting
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

// shuffle functon found on stack overflow:
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

// Split deck in half
var oppoDeck = deck.splice(deck.length/2, deck.length/2);
var yourDeck = deck;

var yourCardVal, oppoCardVal, yourCard, oppoCard;

var click = 0;

// when start button clicked ...
$("#start").on("click", regularPlay)

function regularPlay(){

	// clear board & prepare for play
	$("#start").text("Continue playing");
	$("#end").empty();
	$("#you").empty();
	$("#oppo").empty();
	$("#you").append("<h3>Your Play:</h3>");
	$("#oppo").append("<h3>Opponent's Play:</h3>");

	// play first card in each deck
	$("#you").append(yourDeck[0]);
	yourCard = $(".card").eq(0).text();

	$("#oppo").append(oppoDeck[0]);
	oppoCard = $(".card").eq(1).text();

	whoWins(yourCard, oppoCard);
}

function whoWins(yourCard, oppoCard) {
	click++;

	// assign values to each card
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
			// if you win, all of the cards on display move to the end of your deck
			var winner = "you";
			$("#results").html("<p>Your " + yourCard + " is higher than your opponent's " + oppoCard + ", so you won these cards!</p><p>You have " + yourDeck.length +" cards, and your opponent has " + oppoDeck.length + ".</p>");
			for (var i = 0; i < $(".card").length; i++) {
				yourDeck.push("<div class='card'>" + $('.card').eq(i).html() + "</div>");
			}
			// the cards and your opponent just played are removed from your decks
			yourDeck.splice(0, 1);
			oppoDeck.splice(0, 1);
			// if anyone's deck is empty
			if (yourDeck[0] === undefined || oppoDeck[0] === undefined) {
				$("#results").html("<h2>GAME OVER</h2>");
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
				$("#results").html("<h2>GAME OVER</h2>");
			}
			if (click > 5) {
				endGame();
			}
		}
		else if (yourCardVal === oppoCardVal) {
			// to start a war
			$("#results").html("<h2>War breaks out!</h2>");
			$("#march").css("display", "inline");
			$("#start").css("display", "none");
			$("#march").on("click", wageWar);
		}
}

function endGame() {
    $("#end").css("display", "inline");	
    $("#continue").css("display", "inline");
	$("#start").css("display", "none"); 
	// upon click, clears playing field and determines who wins
	$("#continue").on("click", function(){
		$("#results").empty();
		$("h1").prepend("<div id='img-end'><img src='img/sword.png' alt='sword'><img src='img/arrow.png' alt='arrow'><img src='img/pistol.png' alt='pistol'><img src='img/cannon.png' alt='cannon'></div>");
		$("#you").empty();
		$("#oppo").empty();

		if (yourDeck.length > oppoDeck.length) {
			$("#results").html("<p><strong>After generations of violence, you have finally prevailed.</strong></p><p>With " + yourDeck.length + " cards, to your enemy's " + oppoDeck.length + ", your epic victory will be retold for centuries to come.</p>");
		}
		else if (yourDeck.length < oppoDeck.length) {
			$("#results").html("<p><strong>After generations of violence, your people can take no more.</strong></p><p>With only " + yourDeck.length + " cards, to your enemy's " + oppoDeck.length + ", you are forced to accept defeat. The tragedy will be retold in whispers for centuries to come.</p>")
		}
		else {
			$("#results").html("<p><strong>After generations of violence, you and your enemy are at a standstill.</strong></p><p>With each of you holding " + yourDeck.length + " cards, you and your enemy meet and decide to declare a truce. The diplomatic victory will be retold for centuries to come.</p>")
		}
		// $("#results").append("<p><button id='again'>Play again?</button></p>");
		// $("#again").on("click", location.reload());
		$("#continue").css("display", "none");
	})
}

function wageWar() {
	$("#results").empty();
	$("#march").css("display", "none");

	// clears & prepares playing area
	$("#you").empty();
	$("#oppo").empty();
	$("#you").append("<h3>Your Play:</h3>");
	$("#oppo").append("<h3>Opponent's Play:</h3>");

	// puts the card you just played, plus three more, plus one card that will determine the winner
	$("#you").append(yourDeck[0]);
	$("#you").append(yourDeck[1]);
	$("#you").append(yourDeck[2]);
	$("#you").append(yourDeck[3]);
	$("#you").append(yourDeck[4]);
	// remove those 5 cards from your deck
	yourDeck.splice(0, 4);
	yourCard = $(".card").eq(4).text();
	// three cards in the middle don't immediately display
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

	// hover over the middle cards to see their values
	$(".lost").hover( function() {
		$(this).css("background", "grey");
	},
	function() {
			$(this).css("background", "black");
	})

	$("#start").css("display", "inline");

	// run whoWins function; tell user they can hover
	var winner = whoWins(yourCard, oppoCard);
	if (winner === you) {
		$("#results").append("<p>Peace declared! Hover over the black cards to see which ones you won - and kept>:).</p>");
	} else {
		$("#results").append("<p>Peace has been declared ... but at what price? Hover over the black cards to see what you lost.</p>");
	}
}
