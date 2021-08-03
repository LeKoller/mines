import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, TouchableHighlight, Text} from 'react-native';

import params from './src/params';
import MineField from './src/components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExploded,
  wonGame,
  showMines,
  invertFlag,
} from './src/functions';

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
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [flagging, setFlagging] = useState(false);
  const [hitStyle, setHitStyle] = useState(styles.neonText);
  const [flagStyle, setFlagStyle] = useState(styles.grayText);

  useEffect(() => {
    if (flagging) {
      setFlagStyle(styles.neonText);
      setHitStyle(styles.grayText);
    } else {
      setFlagStyle(styles.grayText);
      setHitStyle(styles.neonText);
    }
  }, [flagging]);

  const doOpenField = (row, column) => {
    const boardClone = cloneBoard(board);
    const didLost = hadExploded(boardClone);

    openField(boardClone, row, column);
    winningCheck(boardClone);

    if (didLost) {
      showMines(boardClone);
      Alert.alert('oh no', 'u lost');
    }

    setLost(didLost);
    setBoard(boardClone);
  };

  const doInvertFlag = (row, column) => {
    const boardClone = cloneBoard(board);

    invertFlag(boardClone, row, column);
    winningCheck(boardClone);
    setBoard(boardClone);
  };

  const winningCheck = boardClone => {
    const didWon = wonGame(boardClone);

    if (didWon) {
      Alert.alert('congrats', 'u won');
    }

    setWon(didWon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.control}>
        <TouchableHighlight onPress={() => setFlagging(false)}>
          <Text style={hitStyle}>Hit</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setFlagging(true)}>
          <Text style={flagStyle}>Flag</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={flagging ? doInvertFlag : doOpenField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#121117',
  },
  board: {
    alignItems: 'center',
    marginBottom: 8,
  },
  control: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  neonText: {
    color: 'green',
    fontSize: 40,
  },
  grayText: {
    color: '#444',
    fontSize: 40,
  },
});

export default App;
