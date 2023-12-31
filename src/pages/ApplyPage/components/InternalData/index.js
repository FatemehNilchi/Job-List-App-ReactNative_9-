import React from 'react';
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import RowView from '@components/RowView';
import Text from '@components/Text';

const InternalData = () => {
  return (
    <View style={styles.cardContainer}>
      <RowView style={styles.titleContainer}>
        <Text size={16} weight="600">
          Google LLC
        </Text>
        <Icon name="check-circle" size={wp(4)} color={'#000'} />
      </RowView>
      <Text size={14}>john.doe@example.com</Text>
      <Text size={14}>New York City</Text>
      <Text size={14}>123 Main St, Apt 4B</Text>
      <Text size={14}>John Doe</Text>
      <Text size={14}>Software Engineer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: wp(3),
    rowGap: wp(1),
  },
  titleContainer: {
    marginBottom: wp(2),
  },
});

export default InternalData;
