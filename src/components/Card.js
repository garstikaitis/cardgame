import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Card({ card }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: card.image,
        }}
        style={styles.image}
      />
      <Text style={{ marginTop: 20 }}>
        {card.value} of {card.suit}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 314,
    width: 226,
  },
});

export { Card };
