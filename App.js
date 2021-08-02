import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import MineField from './src/components/MineField';
import {createMinedBoard} from './src/functions';
import params from './src/params';

const App = () => {
  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return createMinedBoard(rows, cols, minesAmount());
  };

  const [board, setBoard] = useState(createState());

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <MineField board={board} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default App;
