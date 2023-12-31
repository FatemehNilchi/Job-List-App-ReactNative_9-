import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import RowView from '@components/RowView';
import Text from '@components/Text';
import BigButton from '@components/BigButton';
import PagesTemplate from '@components/PagesTemplate';
import CircleIcon from '@components/CircleIcon';
import InternalData from './components/InternalData';

const ApplyPage = () => {
  const nav = useNavigation();

  HeaderContent = (
    <React.Fragment>
      <View style={styles.topSection}>
        <Image
          source={require('@assets/images/tick.png')}
          style={styles.avatar}
        />
        <Text
          align="center"
          lineHeight={36}
          color="white"
          size={22}
          weight="600">
          I found several jobs that seem to match your skills
        </Text>
      </View>
      <RowView justify="flex-start" gap={10} style={styles.helpSection}>
        <CircleIcon
          iconName="google"
          iconColor="#fff"
          backgroundColor="#323946"
        />
        <View>
          <Text color="white" size={18} weight="700">
            Auto Apply Job
          </Text>
          <Text color="white" size={16} weight="400">
            Let me help you apply your job
          </Text>
        </View>
      </RowView>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PagesTemplate HeaderContent={HeaderContent}>
          <View style={styles.container}>
            <InternalData />
            <InternalData />
            <InternalData />
          </View>
        </PagesTemplate>
      </ScrollView>
      <RowView style={styles.btnSection}>
        <BigButton
          buttonText="Send Applocations"
          onPress={() => {
            nav.navigate('Home');
          }}
        />
      </RowView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  btnSection: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
    backgroundColor: '#fff',
  },
  topSection: {
    alignItems: 'center',
    paddingBottom: wp(5),
    rowGap: wp(3),
    paddingHorizontal: wp(5),
  },

  helpSection: {
    backgroundColor: '#1B2331',
    borderRadius: 50,
    paddingVertical: wp(3.5),
    paddingRight: wp(6),
    paddingLeft: wp(3.5),
    marginVertical: wp(7),
  },
  avatar: {
    width: wp(15),
    height: wp(15),
  },
  container: {
    paddingVertical: wp(5),
  },
});
export default ApplyPage;
