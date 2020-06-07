import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import mainStyles from '../styles';

interface Props {
  navigation: any;
}

export default class HomeTab extends React.Component<Props> {
  render() {
    return (
      <View style={[mainStyles.container, mainStyles.defaultBackground]}>
        <View style={[mainStyles.pageContainer, styles.background]}>
          <Text style={mainStyles.mainText}>Welcome to React Native Demo</Text>
          <Text style={mainStyles.mainText}>See tabs to find what to do.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#33BEFF',
  },
});
