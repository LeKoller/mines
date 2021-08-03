import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import Flag from './Flag';

export default ({flagging, setFlagging, onFlagPress, flagsLeft, onNewGame}) => {
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

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => setFlagging(false)}>
        <View
          style={[
            styles.textBorder,
            !flagging
              ? {borderColor: 'rgb(0, 255, 100)'}
              : {borderColor: '#444'},
          ]}>
          <Text style={hitStyle}>HIT!</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.middleDisplay}>
        <View style={styles.flagContainer}>
          <TouchableOpacity onPress={onFlagPress} style={styles.flagButton}>
            <Flag color="#FF0067" size={30} />
          </TouchableOpacity>
          <Text style={styles.flagsLeft}>{flagsLeft}</Text>
        </View>
        <TouchableOpacity onPress={onNewGame}>
          <Text style={styles.button}>new game</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight onPress={() => setFlagging(true)}>
        <View
          style={[
            styles.textBorder,
            flagging
              ? {borderColor: 'rgb(0, 255, 100)'}
              : {borderColor: '#444'},
          ]}>
          <Text style={flagStyle}>Flag</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
  },
  textBorder: {
    width: 120,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  neonText: {
    fontSize: 40,
    color: 'rgb(0, 255, 100)',
    textShadowColor: 'rgba(0, 255, 100, 0.75)',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 20,
  },
  grayText: {
    color: '#444',
    fontSize: 40,
  },
  middleDisplay: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flagContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flagButton: {},
  flagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF0067',
    textAlign: 'right',
    marginLeft: 10,
  },
  button: {
    color: '#67D0FD',
  },
});
