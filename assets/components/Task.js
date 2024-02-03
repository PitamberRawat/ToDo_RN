import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Task = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.square}></Text>
        <Text style={styles.itemStyle}>{props.item}</Text>
      </View>
      <View>
        <Text style={styles.circular}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemStyle: {
    fontSize: 18,
    borderRadius: 8,
  },
  square: {
    height: 30,
    width: 30,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    height: 12,
    width: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "lightblue",
  },
});

export default Task;
