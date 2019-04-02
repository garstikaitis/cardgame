import React, { useState, useEffect } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import axios from "axios";

import * as Components from "./src/components";
import { orderOfCards, getCardValue } from "./src/helpers";

function App() {
  const initialCard = {
    value: null,
    suits: null,
    image: "https://placehold.it/314x226",
  };
  const [cards, setCards] = useState({
    activeCard: initialCard,
    firstCard: initialCard,
    secondCard: initialCard,
  });
  const [victory, setVictory] = useState(null);
  const [deck, setDeck] = useState(null);
  const [cardWasSelected, setCardWasSelected] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [showPlayAgain, setShowPlayAgain] = useState(false);

  useEffect(() => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
      .then(res => {
        const resolver = {
          activeCard: res.data.cards[0],
          firstCard: res.data.cards[0],
          secondCard: res.data.cards[1],
        };
        setCards(resolver);
        setPlayAgain(false);
      });
  }, [playAgain]);

  function bet(shoudlBetHigher) {
    setCards({ ...cards, activeCard: cards.secondCard });
    setCardWasSelected(true);
    const firstCardValue = getCardValue(cards.firstCard.code);
    const secondCardValue = getCardValue(cards.secondCard.code);
    const firstCardIndex = orderOfCards.indexOf(firstCardValue);
    const secondCardIndex = orderOfCards.indexOf(secondCardValue);
    if (shoudlBetHigher) {
      if (firstCardIndex >= secondCardIndex) {
        setVictory(false);
        setShowPlayAgain(true);
      } else {
        setVictory(true);
        setShowPlayAgain(true);
      }
    } else {
      if (firstCardIndex <= secondCardIndex) {
        setVictory(false);
        setShowPlayAgain(true);
      } else {
        setVictory(true);
        setShowPlayAgain(true);
      }
    }
  }

  function handlePlayAgain() {
    setShowPlayAgain(false);
    setCardWasSelected(false);
    setPlayAgain(true);
  }

  return (
    <View style={styles.container}>
      <Components.Card card={cards.activeCard} />
      {showPlayAgain ? (
        <View style={styles.row}>
          <Components.Clickable
            onClick={handlePlayAgain}
            title="Play again"
            color="#fff"
          />
        </View>
      ) : (
        <View style={styles.row}>
          <Components.Clickable
            onClick={() => bet(true)}
            title="Go higher"
            color="#fff"
          />
          <Components.Clickable
            onClick={() => bet(false)}
            title="Go lower"
            color="#fff"
          />
        </View>
      )}
      {cardWasSelected ? <Components.End success={victory} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#11681e",
  },
  row: {
    flexDirection: "row",
  },
});

export default App;
