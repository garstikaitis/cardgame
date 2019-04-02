import React from "react";
import { View, Text, StyleSheet } from "react-native";

function End({ success }) {
  return (
    <View>
      <Text style={styles.text}>{success ? "You won!" : "You lost!"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#fff",
  },
});

export { End };
