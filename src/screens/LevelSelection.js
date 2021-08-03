import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default ({onCancel, isVisible, onLevelSelected, level}) => {
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Level</Text>
          <View style={styles.buttonCase}>
            {level === 0.12 && (
              <View style={styles.arrow}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#0CB6FF"
                  size={30}
                />
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, styles.bgEasy]}
              onPress={() => onLevelSelected(0.12)}>
              <Text style={styles.buttonLabel}>easy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonCase}>
            {level === 0.24 && (
              <View style={styles.arrow}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#0CB6FF"
                  size={30}
                />
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, styles.bgMedium]}
              onPress={() => onLevelSelected(0.24)}>
              <Text style={styles.buttonLabel}>medium</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonCase}>
            {level === 0.36 && (
              <View style={styles.arrow}>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  color="#0CB6FF"
                  size={30}
                />
              </View>
            )}
            <TouchableOpacity
              style={[styles.button, styles.bgHard]}
              onPress={() => onLevelSelected(0.36)}>
              <Text style={styles.buttonLabel}>hard</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonCase}>
            <TouchableOpacity
              style={[styles.button, styles.bgDone]}
              onPress={onCancel}>
              <Text style={styles.buttonLabel}>Done!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 22,
    height: '60%',
    width: '60%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0CB6FF',
    marginTop: -8,
  },
  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonCase: {
    flexDirection: 'row',
  },
  arrow: {
    marginTop: 20,
    marginRight: 8,
  },
  bgEasy: {backgroundColor: '#00CC53', width: 120},
  bgMedium: {backgroundColor: '#FF8700', width: 120},
  bgHard: {backgroundColor: '#E5005C', width: 120},
  bgDone: {backgroundColor: '#8CFF00', width: 120},
});
