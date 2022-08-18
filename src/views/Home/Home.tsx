/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Text from '../../sharedComponents/Text';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.value}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
