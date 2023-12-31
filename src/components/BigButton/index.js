import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function BigButton({colorMode, buttonText, onPress}) {
  const buttonStyles =
    colorMode === 'white' ? styles.whiteButton : styles.blackButton;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyles]}>
      <Text style={[styles.buttonText, buttonStyles]}> {buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: wp(15),
    flex: 1,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  whiteButton: {
    backgroundColor: '#fff',
    color: '#000',

    borderColor: '#000',
  },
  blackButton: {
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
  },
});
