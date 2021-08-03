import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import params from '../params';
import Flag from './Flag';
import Mine from './Mine';

export default props => {
  const {mined, opened, nearMines, exploded, flagged} = props;

  const styleFields = [styles.field];
  //
  if (opened) styleFields.push(styles.opened);
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
        {flagged && !opened && <Flag color="#3F0C1A" size={20} />}
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
    backgroundColor: '#3E5365',
    borderLeftColor: '#5A6D7E',
    borderTopColor: '#5A6D7E',
    borderRightColor: '#192D3F',
    borderBottomColor: '#192D3F',
  },
  opened: {
    backgroundColor: '#192D3F',
    borderLeftColor: '#0B1D2D',
    borderTopColor: '#0B1D2D',
    borderRightColor: '#3E5365',
    borderBottomColor: '#3E5365',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
    textAlign: 'center',
  },
  exploded: {
    backgroundColor: '#653441',
    borderLeftColor: '#3F0C1A',
    borderTopColor: '#3F0C1A',
    borderRightColor: '#581E2E',
    borderBottomColor: '#581E2E',
  },
});
