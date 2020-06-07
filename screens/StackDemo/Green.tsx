import React from 'react';
import {Text, View} from 'react-native';
import styles, {colors} from '../../styles';
import TopButtons from '../../components/TopButtons';
import NavigationLevelIndicator from '../../components/NavigationLevelIndicator';

export default class Home extends React.Component {
  render() {
    return (
      <View style={[styles.container, {backgroundColor: colors.green}]}>
        <TopButtons />
        <NavigationLevelIndicator />
        <View style={styles.pageContainer}>
          <Text style={styles.mainText}>This is a GREEN screen</Text>
        </View>
      </View>
    );
  }
}
