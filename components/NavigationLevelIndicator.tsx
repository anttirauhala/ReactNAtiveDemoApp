import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

const NavigationLevelIndicator = () => {
  const index = useNavigationState((state) => state.index);

  return (
    <View style={styles.container}>
      <Text>Navigation index: {index}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavigationLevelIndicator;
