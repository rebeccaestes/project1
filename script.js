// Deck and contents
var deck = [];

var swords = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var arrows = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var pistols = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var cannons = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
var jokers = ["joker", "jester"];

// Make deck, with card formatting
for (var i = 0; i < swords.length; i++) {
  deck.push("<div class='card sword'><p id='label'>" + swords[i] + "</p><img src='img/sword.png' alt='sword'></div>");
}
for (var i = 0; i < arrows.length; i++) {
  deck.push("<div class='card arrow'><p id='label'>" + arrows[i] + "</p><img src='img/arrow.png' alt='arrow'></div>");
}
for (var i = 0; i < pistols.length; i++) {
  deck.push("<div class='card pistol'><p id='label'>" + pistols[i] + "</p><img src='img/pistol.png' alt='pistol'></div>");
}
for (var i = 0; i < cannons.length; i++) {
  deck.push("<div class='card cannon'><p id='label'>" + cannons[i] + "</p><img src='img/cannon.png' alt='cannon'></div>");
}
for (var i = 0; i < jokers.length; i++) {
  deck.push("<div class='card joker'><p id='label'>" + jokers[i] + "</p><img src='img/joker.png' alt='jester-hat'></div>");
}

// shuffle deck
deck.sort(function() { 
  return 0.5 - Math.random();
});

// Split deck in half
var oppoDeck = deck.splice(deck.length / 2, deck.length / 2);
var yourDeck = deck;

var yourCardVal, oppoCardVal, yourCard, oppoCard, cardClasses;

var numClicks = 0;
var wars = 0;

$("#start").on("click", regularPlay);

// when start button clicked ...
function regularPlay() {
  numClicks++;

  // clear board & prepare for play
  $("#start").text("Continue playing");
  $("#peacehover").empty();
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
  return numClicks;
}

function whoWins(yourCard, oppoCard) {
  // assign values to each card

  if (yourCard === "jack") {
    yourCardVal = 11;
  } else if (yourCard === "queen") {
    yourCardVal = 12;
  } else if (yourCard === "king") {
    yourCardVal = 13;
  } else if (yourCard === "ace") {
    yourCardVal = 14;
  } else if (yourCard === "jester" || yourCard === "joker") {
    yourCardVal = "exception";
  } else {
    yourCardVal = parseInt(yourCard);
  }

  if (oppoCard === "jack") {
    oppoCardVal = 11;
  } else if (oppoCard === "queen") {
    oppoCardVal = 12;
  } else if (oppoCard === "king") {
    oppoCardVal = 13;
  } else if (oppoCard === "ace") {
    oppoCardVal = 14;
  } else if (oppoCard === "jester" || oppoCard === "joker") {
    oppoCardVal = "exception";
  } else {
    oppoCardVal = parseInt(oppoCard);
  } 

  // if you play a joker or a jester, something special should happen ...
  if (yourCardVal === "exception" || oppoCardVal === "exception") {
    jesterPlay(yourCard, oppoCard, yourCardVal, oppoCardVal);
    return yourCardVal, oppoCardVal;
  } 

  if (yourCardVal > oppoCardVal) {
    // if you win, all of the cards on display move to the end of your deck
    for (var i = 0; i < $(".card").length; i++) {
      // this if statement removes the 'facedown' class, if it was added during a war
      if ($(".card").eq(i).hasClass("facedown")) {
        $(".card").eq(i).removeClass("facedown");
      }
      cardClasses = $(".card").eq(i).attr("class");
      yourDeck.push("<div class='" + cardClasses + "'>" + $('.card').eq(i).html() + "</div>");
    }
    // the cards and your opponent just played are removed from your decks; tells user the size of each deck
    yourDeck.splice(0, 1);
    oppoDeck.splice(0, 1);
    $("#results").html("<p>Your " + yourCard + " is higher than your opponent's " + oppoCard + ", so you won these cards!</p><p>You have " + yourDeck.length + " cards, and your opponent has " + oppoDeck.length + ".</p>");
    // if anyone's deck is empty
    if (yourDeck[0] === undefined) {
      $("#results").html("<h2>GAME OVER</h2><p>You lost, and your people are decimated.</p>");
      $("#start").css("display", "none");
    }
    else if (oppoDeck[0] === undefined) {
      $("#results").html("<h2>GAME OVER</h2><p>You win, and your soldiers avenge their losses by decimating your opponent's population. The massacre alienates all of your allies. Your next war may not go so well ... </p>");
      $("#start").css("display", "none");
    }
    // return winner;

  } else if (yourCardVal < oppoCardVal) {
    for (var i = 0; i < $(".card").length; i++) {
      if ($(".card").eq(i).hasClass("facedown")) {
        $(".card").eq(i).removeClass("facedown");
      }
      cardClasses = $(".card").eq(i).attr("class");
      yourDeck.push("<div class='" + cardClasses + "'>" + $('.card').eq(i).html() + "</div>");
    }
    yourDeck.splice(0, 1);
    oppoDeck.splice(0, 1);
    $("#results").html("<p>Your " + yourCard + " is lower than your opponent's " + oppoCard + ", so you lost these cards :(</p>");
    if (yourDeck[0] === undefined) {
      $("#results").html("<h2>GAME OVER</h2><p>You lost, and your people are decimated.</p>");
      $("#start").css("display", "none");
    }
    else if (oppoDeck[0] === undefined) {
      $("#results").html("<h2>GAME OVER</h2><p>You win, and your soldiers avenge their losses ... by decimating your opponent's population. The massacre alienates all of your allies. Your next war may not go so well ... </p>");
      $("#start").css("display", "none");
    }
    // return winner;

  } else if (yourCardVal === oppoCardVal) {
    // if they've clicked at least 10 times, and had at least 1 war, end the game
    if (numClicks > 10 && wars > 0) {
      endGame();
    // otherwise, wage war
    } else {
      $("#results").html("<h2>War breaks out!</h2>");
      $("#march").css("display", "inline");
      $("#start").css("display", "none");
      $("#march").on("click", wageWar);
      wars++;
    }
  }
}

function endGame() {
  $("#results").empty();
  $("#results").html("<h2>War breaks out!</h2>");
  $("#meeting").html("<p>But wait ... <strong>Your enemy has sent an emissary to meet with you.</strong> Click to meet with them.</p>");
  $("#continue").css("display", "inline");
  $("#start").css("display", "none");
  // upon click, clears playing field and determines who wins
  $("#continue").on("click", function() {
    $("#results").empty();
    $("#meeting").empty();
    $("#peacehover").empty();
    $("#you").empty();
    $("#oppo").empty();

    if (yourDeck.length > oppoDeck.length) {
      $("#results").html("<p>At the meeting, you hammer out terms of peace. <strong>After generations of violence, you have finally prevailed.</strong></p><p>With " + yourDeck.length + " cards to your enemy's " + oppoDeck.length + ", your epic victory will be retold for centuries to come.</p>");
    } else if (yourDeck.length < oppoDeck.length) {
      $("#results").html("<p>At the meeting, you hammer out terms of peace. <strong>After generations of violence, your people can take no more.</strong></p><p>With only " + yourDeck.length + " cards to your enemy's " + oppoDeck.length + ", you are forced to accept defeat. The tragedy will be retold in whispers for centuries to come.<p>")
    } else {
      $("#results").html("<p>At the meeting, you hammer out terms of peace. <strong>After generations of violence, you and your enemy are at a standstill.</strong></p><p>With each of you holding " + yourDeck.length + " cards, you and your enemy meet and decide to declare a truce. The diplomatic victory will be retold for centuries to come.<p>")
    }
    $("#continue").css("display", "none");
  })
}

function wageWar() {
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
    $(".card").eq(i).css("background", "black").addClass("facedown");
  }

  $("#oppo").append(oppoDeck[0]);
  $("#oppo").append(oppoDeck[1]);
  $("#oppo").append(oppoDeck[2]);
  $("#oppo").append(oppoDeck[3]);
  $("#oppo").append(oppoDeck[4]);
  oppoDeck.splice(0, 4);
  oppoCard = $(".card").eq(9).text();
  for (var i = 6; i < 9; i++) {
    $(".card").eq(i).css("background", "black").addClass("facedown");
  }

  // hover functionality for facedown cards
  $(".facedown").hover(function() {
      $(this).css("background", "grey");
    },
    function() {
      $(this).css("background", "black");
    })

  $("#start").css("display", "inline");
  whoWins(yourCard, oppoCard);
}

// If you play a joker or jester, you win the match, plus extra cards from your opponent. The number of extra cards is equal to the value of the card your opponent played against your joker/jester.
function jesterPlay(yourCard, oppoCard, yourCardVal, oppoCardVal) {
  if ((yourCard === "jester" || yourCard === "joker") && (oppoCard !== "jester" && oppoCard !== "joker")) {
    $("#results").html("<p>You played your " + yourCard + ", and your opponent played their " + oppoCard + "!  Because their " + oppoCard + " is worth " + oppoCardVal + " points, you win that many extra cards from your opponent!</p>");
    yourDeck.splice(0, 1);
    yourDeck.push("<div class='card jester'>" + $('.card').eq(0).html() + "</div>");
    for (var i = 0; i < oppoCardVal + 1; i++) {
      yourDeck.push(oppoDeck[i]);
    }
    oppoDeck.splice(0, oppoCardVal + 1);
    return yourCardVal;

  } else  if ((yourCard !== "jester" && yourCard !== "joker") && (oppoCard === "jester" || oppoCard === "joker")) {
    $("#results").html("<p>You played your " + yourCard + ", but your opponent played their " + oppoCard + "! Because your " + yourCard + " is worth " + yourCardVal + " points, you have to give that many extra cards to your opponent :(</p>");
    oppoDeck.splice(0, 1);
    yourDeck.push("<div class='card jester'" + $('.card').eq(1).html() + "</div>");
    for (var i = 0; i < yourCardVal + 1; i++) {
      oppoDeck.push(yourDeck[i]);
    }
    yourDeck.splice(0, yourCardVal + 1);
    return oppoCardVal;

  // But if you both play a jester or a joker, you self-destruct.
  } else  if ((yourCard === "jester" || yourCard === "joker") && (oppoCard === "jester" || oppoCard === "joker")) {
    $("#results").html("<p>Of all the risks in the Game of War ... the most dangerous and deadly of all is pitting two jokers or jesters against each other.</p>");
    $("#start").css("display", "none");
    $("#peril").css("display", "inline");
    $("#peril").on("click", annihilate);
  }
}


function annihilate() {
  $("body").empty()
  $("body").append("<h1>Total annihilation</h1>");
  $("body").append("<img id='explode' src='img/annihilation.jpg'>")
}