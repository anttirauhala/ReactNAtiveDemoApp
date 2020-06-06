import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import TopButtons from '../components/TopButtons';
import NavigationLevelIndicator from '../components/NavigationLevelIndicator';

interface Props {
  navigation: any;
}

export default class Home extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container, styles.defaultBackground]}>
        <TopButtons />
        <NavigationLevelIndicator />
        <View style={styles.pageContainer}>
          <Text style={styles.mainText}>This is HOME screen</Text>
        </View>
      </View>
    );
  }
}
