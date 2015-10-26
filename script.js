var swords = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
var arrows = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
var pistols = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
var cannons = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
var jokers = ["joker1", "joker2"];

var deck = [swords, arrows, pistols, cannons, jokers];

for (var i = 0; i < swords.length; i++) {
	$("#swords").append("<div class='card'><p>" + swords[i] + "</p><img src='img/sword.png' alt='sword'></div>");
}
for (var i = 0; i < arrows.length; i++) {
	$("#arrows").append("<div class='card'><p>" + arrows[i] + "</p><img src='img/arrow.png' alt='sword'></div>");
}
for (var i = 0; i < pistols.length; i++) {
	$("#pistols").append("<div class='card'><p>" + pistols[i] + "</p><img src='img/pistol.png' alt='sword'></div>");
}
for (var i = 0; i < cannons.length; i++) {
	$("#cannons").append("<div class='card'><p>" + cannons[i] + "</p><img src='img/cannon.png' alt='sword'></div>");
}
for (var i = 0; i < jokers.length; i++) {
	$("#jokers").append("<div class='card'><p>" + jokers[i] + "</p><img src='img/joker.png' alt='sword'></div>");
}

// $(".awesome").append("<div>this div is appended</div>")


// Math.floor((Math.random() * 53)