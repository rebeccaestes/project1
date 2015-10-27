GA Project 1: War

1. As a player, I want to be able to play War against the computer, so that I can play War when I'm bored and alone.
2. As a player, I want to be able to see how many cards I have and how many my opponent has, so I can see if I'm winning this match.
3. As a player, I want to be able to view the results from each match, so I can see how many matches I've won this session.
4. As a player, I want to be able to record the length of each match, so I can see how much time I'm wasting.
5. As a player, I would like to play matches in groups of five, so that I don't waste more time than necessary playing War.

NOTES, AFTER COMPLETING PROJECT
A lot of these were not MVP. I completed #1 and #2, but the others would have taken too long. What I didn't foresee was that, in my many rounds of testing, I never actually won a game, until I prompted the endGame function to run when a certain number of rounds and wars had occurred.

Technologies used/comments on code:
- I first compiled each suit (plus jokers), and then pushed each item into an array of the whole deck. This is because when I first started coding, I had the entire deck laid out on the screen, so I could add the images, format them correctly, etc. 
- Then the deck shuffles, and I divide the shuffled deck into yourDeck and oppoDeck, by splicing
- I track numClicks and wars, in order to know when the game should end.
- on("click")s to start a game, continue to the next round, etc. the regularPlay function records numClicks, and the cards you and your opponent pulled, before calling whoWins.
- whoWins assigns values to the face cards, and parseInts the number cards. It then compares them all to decide who wins, and tells you. It also tells you how many cards you and your opponent each have.
- If the cards are equal, then the code calls wageWar when you click on a button, UNLESS you have called regularPlay at least 10 times, in which case it calls endGame.
- endGame has you click a button (to "meet with an emissary"), and compares yourDeck to oppoDeck to pick a final winner.
- wageWar clears the deck, and then plays the card you just put down, plus 4 more. Whoever wins the 5th determines the winner of the war. The 3 in the middle are black because in the original game they're face down, but you can hover over them to see what they are.

Problems:
- I had a very hard time firguring out where to call endWar. It kept pushing together incorrect messages to the user.
- I realized at the very end that the message telling the user how many cards they and their user had was using variables before the cards they'd played/won had been spliced/pushed from their deck.
- I somehow managed to delete my Javascript link while validating my HTML template, breaking everything, and almost cried.
- I wanted to put all four of the suit images in a row at the end, but they wouldn't center, maybe because I was appending them to a non-centered div ...
- If the 5th cards each player plays during a war also match, it plays another war, but the top 2 cards are new ones, not the original ones that matched.

I included the joker originally because I wanted it joker to be a trump card that steals a number of cards from the opponent equal to the value of the card the opponent played, but didn't have the chance. But I liked the gradient I used on those cards so I kept it.

Instructions/notes:
- You can force the next round to be a war by putting 'yourDeck[0] = oppoDeck[0]' in the console.