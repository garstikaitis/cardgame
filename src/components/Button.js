import React from "react";
import { Button, StyleSheet } from "react-native";

function Clickable({ title, color, onClick }) {
  return (
    <Button
      style={styles.button}
      onPress={onClick}
      color={color}
      title={title}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#fff",
  },
});

export { Clickable };
