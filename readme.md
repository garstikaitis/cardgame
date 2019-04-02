## Introduction

I have solved the challenge of Aurity. Proposed solution is Card game built in react native.
Game rules are as follows:

```
├── Player gets a card on the screen
├── Player can guess if the second card will be higher or lower
├── After guess has happened - the deck is shuffled and player can start again.
```

## Initial thoughts and process

After receiving task, first thing I did was to initialize RN app. While it was installing I sketched out pseudo code. Result of it can be seen below.

```
├── On the initial load of the app
├──── Check if the deck is already existing (AsyncStorage might be helpful here)
├────── Get 2 cards from this deck
├──── Else create new deck
├──── Show the first card out of two on the screen
├──── After clicking button (either higher or lower) reveal the second card and based on its value calculate the result
├──── Reveal play again button.
├──── Shuffle the deck.
```

After that I analyzed the possible API endpoints, to see what data I will be working with.

## Implementation process

When React app was initialized, I realized that it is a good application to use new feature of React - Hooks. So I started out by refactoring classes to functional components.
Once that was done, I splitted the app into 3 components - Card(actual game card), Button, End(Victory/Loss Screen). After components were done and styled, I moved on to
business logic implementation and started out with defining rules for which cards are higher than the others.
After that was done, I moved on to create my hooks and effects.
`victory` - this hook is responsible for knowing whether the player has won or lost.
`cards` - this hook is responsible for having cards received from API endpoint.
`cardWasSelected` - this hook is responsible for toggling the state of whether the card was betted on/against.
`playAgain` - this hook is toggling the shuffling of the deck
`showPlayAgain` - this hook is responsible is toggling whether play again button should appear.
After that everything was done according to the task
