import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '@components/Text';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Tags = ({title}) => {
  return (
    <View style={styles.container}>
      <Text color="#3D3D3D" size={14} weight="500">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: wp(1.5),
    paddingHorizontal: wp(3),
  },
});

export default Tags;
