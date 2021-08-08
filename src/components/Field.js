import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import params from '../params';
import Flag from './Flag';
import Mine from './Mine';

export default props => {
  const {mined, opened, nearMines, exploded, flagged} = props;

  const styleFields = [styles.field];
  //
  if (opened && !mined) styleFields.push(styles.opened);
  if (opened && mined) styleFields.push(styles.minedNotExploded);
  if (exploded) styleFields.push(styles.exploded);
  if (flagged) styleFields.push(styles.flagged);
  if (!opened) styleFields.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    switch (nearMines) {
      case 1:
        color = '#5B8475';
        break;
      case 2:
        color = '#C3AA86';
        break;
      case 3:
        color = '#C39986';
        break;
      default:
        color = '#B17A88';
    }
  }

  return (
    <TouchableWithoutFeedback onPress={props.onOpen}>
      <View style={styleFields}>
        {!mined && opened && nearMines >= 0 && (
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
        )}
        {mined && opened && <Mine />}
        {flagged && !opened && <Flag color="#FF0067" size={20} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  regular: {
    backgroundColor: 'transparent',
    borderColor: '#0CB6FF',
    borderRadius: 12,
    margin: 1,
  },
  opened: {
    backgroundColor: 'transparent',
    borderColor: '#00FF67',
    borderRadius: 12,
    margin: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
    textAlign: 'center',
  },
  exploded: {
    backgroundColor: 'transparent',
    borderColor: '#FF3100',
    borderRadius: 12,
    margin: 1,
  },
  minedNotExploded: {
    backgroundColor: 'transparent',
    borderColor: '#FF8700',
    borderRadius: 12,
    margin: 1,
  },
});
