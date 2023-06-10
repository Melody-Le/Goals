import { useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modelVisible, setModelVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  function addGoalHandler(enteredGoalText) {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id) {
    console.log(id);
    setCourseGoals((curGoals) => curGoals.filter((goal) => goal.id !== id));
  }
  function startAddGoalHandler() {
    setModelVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add new Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modelVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler} />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id; // to get unique key from the list
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
