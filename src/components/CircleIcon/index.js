import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const CircleIcon = ({iconName, iconColor, backgroundColor}) => {
  return (
    <View style={[styles.circleView, {backgroundColor: backgroundColor}]}>
      <Icon name={iconName} size={wp(6)} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  circleView: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleIcon;
