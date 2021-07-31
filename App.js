import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Field from './src/components/Field';

const App = () => {
  return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Iniciando o Mines</Text>
          <Field />
          <Field opened />
          <Field opened nearMines={1} />
          <Field opened nearMines={2} />
          <Field opened nearMines={3} />
          <Field opened nearMines={4} />
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  welcome: {
    fontSize: 20,
    textAlign:  'center',
    margin: 10,
    color: '#174231',
  }
});

export default App;
