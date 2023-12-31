import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import RowView from '@components/RowView';
import Text from '@components/Text';
import PagesTemplate from '@components/PagesTemplate';
import CircleIcon from '@components/CircleIcon';
import Tags from '@components/Tags';
import BigButton from '@components/BigButton';

const JobPage = () => {
  const nav = useNavigation();

  HeaderContent = (
    <React.Fragment>
      <RowView style={styles.headerStyle}>
        <CircleIcon
          iconName="arrow-left"
          iconColor="#fff"
          backgroundColor="#2A323F"
        />
        <Text color="white" size={32} weight="200">
          Google LLC
        </Text>
        <CircleIcon
          iconName="bookmark-o"
          iconColor="#fff"
          backgroundColor="#2A323F"
        />
      </RowView>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PagesTemplate HeaderContent={HeaderContent}>
          <View style={styles.container}>
            <View style={styles.topSection}>
              <CircleIcon
                iconName="google"
                iconColor="#fff"
                backgroundColor="#000"
              />
              <Text size={22} weight="700">
                Senior Ui/Ux Designer
              </Text>
              <Text size={16} weight="500">
                Google LLC
              </Text>
              <RowView justify="flex-start" gap={8}>
                <Tags title="Hybrid" />
                <Tags title="fulltime" />
                <Tags title="2 Year Exp" />
              </RowView>
            </View>
            <Text size={18} weight="600">
              Google LLC
            </Text>
            <RowView align="flex-start" gap={10}>
              <Text size={26} lineHeight={30}>
                •
              </Text>
              <Text lineHeight={26} size={16}>
                Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo
                bolo1) est, , une suite de mots sans signification utilisée à
                titre provisoire pour calibrer une mise en page, le texte
                définitif venant remplacer le faux-texte dès qu'il est prêt ou
                que la mise en
              </Text>
            </RowView>
            <RowView align="flex-start" gap={10}>
              <Text size={26} lineHeight={30}>
                •
              </Text>
              <Text lineHeight={26} size={16}>
                itmise en page, le texte définitif st pu que la mise en
              </Text>
            </RowView>
            <RowView align="flex-start" gap={10}>
              <Text size={26} lineHeight={30}>
                •
              </Text>
              <Text lineHeight={26} size={16}>
                Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo
                bolo1) le faux-texte dès qu'il est prêt ou que la mise en
              </Text>
            </RowView>
            <RowView align="flex-start" gap={10}>
              <Text size={26} lineHeight={30}>
                •
              </Text>
              <Text lineHeight={26} size={16}>
                Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo
                bolo1) est, , une suite de mots sans signification utilisée à
                titre provisoire pour calibrer une mise en page, le texte
                définitif venant remplacer le faux-texte dès qu'il est prêt ou
                que la mise en
              </Text>
            </RowView>
            <RowView align="flex-start" gap={10}>
              <Text size={26} lineHeight={30}>
                •
              </Text>
              <Text lineHeight={26} size={16}>
                Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo
                bolo1) est, , une suite de mots sans signification utilisée à
                titre provisoire pour calibrer une mise en page, le texte
                définitif venant remplacer le faux-texte dès qu'il est prêt ou
                que la mise en
              </Text>
            </RowView>
          </View>
        </PagesTemplate>
      </ScrollView>
      <RowView style={styles.btnSection}>
        <BigButton
          buttonText="Apply manual"
          colorMode="white"
          onPress={() => {
            nav.navigate('ApplyPage');
          }}
        />
        <BigButton
          buttonText="Apply with AI"
          onPress={() => {
            nav.navigate('ApplyPage');
          }}
        />
      </RowView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    paddingBottom: wp(7),
  },

  topSection: {
    alignItems: 'center',
    paddingBottom: wp(5),
    rowGap: wp(3),
  },
  container: {
    paddingHorizontal: wp(5),
    paddingVertical: wp(5),
  },
  btnSection: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
    backgroundColor: '#fff',
  },
});
export default JobPage;
