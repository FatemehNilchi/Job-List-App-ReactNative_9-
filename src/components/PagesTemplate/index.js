import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const PagesTemplate = ({children, HeaderContent}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>{HeaderContent}</View>
      <View style={styles.mainContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020B1A',
  },
  header: {
    paddingHorizontal: wp(3),
    marginTop: wp(8),
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
});

export default PagesTemplate;
