import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from './Button';
import {colors} from '../styles';

const TopButtons = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        text={'Pop most upper screen'}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        }}
        color={colors.lightBlue}
      />
      <View>
        <Button
          text={'Go to Red'}
          onPress={() => {
            navigation.navigate('Red');
          }}
          color={colors.red}
        />
        <Button
          text={'Go to Yellow'}
          onPress={() => {
            navigation.navigate('Yellow');
          }}
          color={colors.yellow}
        />
        <Button
          text={'Go to Green'}
          onPress={() => {
            navigation.navigate('Green');
          }}
          color={colors.green}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
});

export default TopButtons;
