import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Constants from 'expo-constants';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Search</Text>
    </View>
  );
}

export default Search;

// todo: move these to a styles file
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#25273a',
    padding: 8,
    height: '100%',
  },
  paragraph: {
    color: '#becce7',
    fontSize: 20,
  },
});