THE GAME OF WAR

Tips for manipulating play in the console:

<ul><li>yourDeck and oppoDeck are arrays of each user's cards. You can force a war by setting cards of the same index to be equal in the console.</li>
<li>Interesting things happen when the joker (or jester; they're equivalent) is played.</li>
<li>Extra interesting things happen when two jokers are played against each other.</li>
<li>There are two ways to end the game: 1. play more than 10 regular rounds, and at least one war; or 2. one player loses all their cards. Different things happen in each case.</li></ul>

- SPOILERS BELOW- 

Each card gets a value - 2 for a 2, 11 for a queen, etc. Jokers/jesters are special.
Upon play, whoever's card has a higher value wins the two cards in play.
If the two cards played have the same value, then three cards are played "face-down" on top of them, and then a final card, which determines the winner. The winner gets all 10 cards in play. Users can hover over the face-down cards to see what they were.
If a user plays a jester, they win the two cards in play, plus their opponent has to give up an extra number of cards equal to the value of the card they played.
If two users play a jester, they mutually destruct.

Tip: You can force the next round to be a war by putting 'yourDeck[0] = oppoDeck[0]' in the console
