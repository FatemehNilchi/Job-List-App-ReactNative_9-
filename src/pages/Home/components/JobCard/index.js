import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import CircleIcon from '@components/CircleIcon';
import Text from '@components/Text';
import RowView from '@components/RowView';
import Tags from '@components/Tags';

const JobCard = ({title, icon}) => {
  const nav = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.7}
      onPress={() => {
        nav.navigate('JobPage');
      }}>
      <RowView justify="flex-start" gap={12}>
        <CircleIcon iconName={icon} iconColor="#fff" backgroundColor="#000" />
        <View>
          <Text size={16} weight="500">
            {title}
          </Text>
          <Text size={14}>Google LLC</Text>
        </View>
      </RowView>

      <RowView justify="flex-start" gap={8}>
        <Icon name="map-pin" size={wp(4)} color={'#000'} />
        <Text size={14}>Google LLC</Text>
      </RowView>
      <RowView justify="flex-start" gap={8}>
        <Icon name="dollar-sign" size={wp(4)} color={'#000'} />
        <Text size={14}>300k/year</Text>
      </RowView>
      <View style={styles.line} />
      <RowView justify="flex-start" gap={8}>
        <Tags title="Hybrid" />
        <Tags title="fulltime" />
        <Tags title="2 Year Exp" />
      </RowView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    margin: wp(3),
    padding: wp(4),
    rowGap: wp(3),
  },
  line: {
    width: '100%',
    backgroundColor: '#EDEDED',
    height: 1,
  },
});

export default JobCard;
