import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';

import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExploded,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';

const App = () => {
  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createNewBoard = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return createMinedBoard(rows, cols, minesAmount());
  };

  const [board, setBoard] = useState(createNewBoard());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [flagging, setFlagging] = useState(false);

  const doOpenField = (row, column) => {
    const boardClone = cloneBoard(board);
    openField(boardClone, row, column);

    const didLost = hadExploded(boardClone);
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

  const startNewGame = () => {
    setBoard(createNewBoard());
    setLost(false);
    setWon(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <Header
          flagging={flagging}
          setFlagging={setFlagging}
          flagsLeft={minesAmount() - flagsUsed(board)}
          onNewGame={startNewGame}
        />
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
});

export default App;
