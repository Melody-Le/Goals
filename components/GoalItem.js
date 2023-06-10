import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        android_ripple={{ color: '#b08cdf' }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

export default GoalItem;
