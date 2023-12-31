import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RowView from '@components/RowView';
import Text from '@components/Text';
import PagesTemplate from '@components/PagesTemplate';
import CircleIcon from '@components/CircleIcon';
import JobCard from './components/JobCard';

const Home = () => {
  HeaderContent = (
    <React.Fragment>
      <RowView>
        <CircleIcon
          iconName="navicon"
          iconColor="#fff"
          backgroundColor="#2A323F"
        />
        <Text color="white" size={32} weight="200">
          Hi, James
        </Text>
        <Image
          source={require('@assets/images/James.png')}
          style={styles.avatar}
        />
      </RowView>
      <RowView style={styles.helpSection}>
        <View>
          <Text color="white" size={18} weight="700">
            Auto Apply Job
          </Text>
          <Text color="white" size={16} weight="400">
            Let me help you apply your job
          </Text>
        </View>
        <CircleIcon
          iconName="arrow-right"
          iconColor="#000"
          backgroundColor="#61FFE3"
        />
      </RowView>
    </React.Fragment>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <PagesTemplate HeaderContent={HeaderContent}>
        <View style={styles.container}>
          <Text size={20} align="center" style={styles.containerAllert}>
            ✨ I found several jobs that seem to match your skills ✨
          </Text>
          <JobCard title="Senior Ui/Ux Designer" icon="google" />
          <JobCard title="Junior User Researcher" icon="facebook" />
        </View>
      </PagesTemplate>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
  },
  helpSection: {
    backgroundColor: '#2A323F',
    borderRadius: 50,
    paddingVertical: wp(3.5),
    paddingRight: wp(3.5),
    paddingLeft: wp(6),
    marginVertical: wp(7),
  },
  container: {
    backgroundColor: '#F5F7FA',
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
  containerAllert: {
    paddingHorizontal: wp(13),
    paddingVertical: wp(5),
  },
});
export default Home;
