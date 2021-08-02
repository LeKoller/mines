import React from 'react';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFlag} from '@fortawesome/free-solid-svg-icons';

export default props => {
  return (
    <View>
      <FontAwesomeIcon icon={faFlag} color="#3F0C1A" size={20} />
    </View>
  );
};
