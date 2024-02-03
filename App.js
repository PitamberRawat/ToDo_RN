import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./assets/components/Task";

export default function App() {
  const [task, setTask] = useState(null);
  const [taskList, setTaskList] = useState([]);

  const handlePress = () => {
    Keyboard.dismiss();
    if (task !== null && task !== "") setTaskList([...taskList, task]);
    setTask(null);
  };

  const completedTask = (index) => {
    let copyArray = [...taskList];
    copyArray.splice(index, 1);
    setTaskList(copyArray);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's Tasks</Text>
      {/* TASKS list START HERE */}
      <View>
        {taskList.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completedTask(index)}>
              <Task item={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        style={styles.inputCon}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.inputStyle}
          placeholder="Write a Task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 65,
    paddingHorizontal: 18,
  },
  heading: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 20,
  },
  inputStyle: {
    color: "black",
    backgroundColor: "#fff",
    marginLeft: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 60,
    width: 275,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  iconContainer: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
  },
  inputCon: {
    flexDirection: "row",
    position: "absolute",
    bottom: 35,
    justifyContent: "space-between",

    width: "100%",
  },
});
