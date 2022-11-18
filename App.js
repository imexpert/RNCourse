import { useState } from "react";
import { StyleSheet, TextInput, View, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal 2!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical="false">
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

        <FlatList data={courseGoals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>
        }} alwaysBounceVertical="false" keyExtractor={(item, index) => {
          return item.id;
        }}>

        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 5,
  }
});
