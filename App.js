/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import Task from "./Components/Task";

const App = () => {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  const handleAddTask = () => {
    setList([...list, task]);
    setTask(null);
  };

  const deleteTask = (index) => {
    let templist = [...list];
    templist.splice(index, 1);
    setList(templist);
  };

  useEffect(() => {}, [list]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO-App</Text>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Pending Tasks</Text>
        <View style={styles.items}>
          {list.length > 0 ? (
            list.map((task, idx) => {
              return (
                <TouchableOpacity key={idx} onPress={() => deleteTask(idx)}>
                  <Task key={idx} text={task} />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No Tasks Pending</Text>
          )}
        </View>
      </View>
      <KeyboardAvoidingView behavior="height" style={styles.wrteTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write Here"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPressIn={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "#000000",
    color: "#fff",
    fontFamily: "arial",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },
  wrteTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});

export default App;
