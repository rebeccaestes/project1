THE GAME OF WAR

http://rebeccaestes.github.io/project1/

Tips for manipulating play in the console:
- yourDeck and oppoDeck are arrays of each user's cards. You can force a war by setting cards of the same index to be equal in the console.
- Interesting things happen when the joker (or jester; they're equivalent) is played.
- Extra interesting things happen when two jokers are played against each other.
- There are two ways to end the game: 1. play more than 10 regular rounds, and at least one war; or 2. one player loses all their cards. Different things happen in each case.

SPOILER SPACE
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
|
END SPOILER SPACE

GA Project 1: War User Stories

1. As a player, I want to be able to play War against the computer, so that I can play when I'm bored and alone.
2. As a player, I want to be able to see how many cards I have and how many my opponent has, so I can see if I'm winning this match.
3. As a player, I want the game to force an end after a certain number of rounds/a certain time, because games can go on forever and that's boring.
4. As a player, I want the jokers to do something special, because the regular game of war is not always very interesting.
5. As a developer, I want the layout of the game to look nice, because spending hours testing an ugly page is depressing.

Technologies used/how I built the game:
- I first compiled each suit (plus a set of jokers, composed of a joker and a jester), and then pushed each item into an array of the whole deck. This is because when I first started coding, I laid out on the screen, so I could position the images, make sure I had a complete deck, etc. 
- Then the deck shuffles, and I divide the shuffled deck into two halves, assigned to yourDeck and oppoDeck.
- I track numClicks and wars, in order to know if/when the game should end.
- Each card gets a value - 2 for a 2, 11 for a queen, etc. Jokers/jesters are special.
- Upon play, whoever's card has a higher value wins the two cards in play.
- If the two cards played have the same value, then three cards are played "face-down" on top of them, and then a final card, which determines the winner. The winner gets all 10 cards in play. Users can hover over the face-down cards to see what they were.
- If a user plays a jester, they win the two cards in play, plus their opponent has to give up an extra number of cards equal to the value of the card they played. 
- If two users play a jester, they mutually destruct.

Problems/bugs:
- I wanted to put all four of the suit images in a row at the end, but they wouldn't center, maybe because I was appending them to a non-centered div ...
- If the 5th cards each player plays during a war also match, it plays another war (on a new screen), but the top 2 cards are new ones, not the original matched pair. 
- The exception to the above rule is if the 5th cards in a war are both jokers - then it moves striaght to the joker vs. joker scenario. 
- In any joker vs. joker scenario, I couldn't get the "Continue" button to disappear, although it doesn't do anything if you click it.

I included the joker originally because I wanted it joker to be a trump card that steals a number of cards from the opponent equal to the value of the card the opponent played, but didn't have the chance. But I liked the gradient I used on those cards so I kept it.

Instructions/notes:
- You can force the next round to be a war by putting 'yourDeck[0] = oppoDeck[0]' in the console.