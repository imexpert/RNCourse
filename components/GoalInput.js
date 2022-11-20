import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          //source={require("../assets/images/goal.png")}
          source="som/ath12312/asd.png"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal 2!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color="#5e0acc"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
