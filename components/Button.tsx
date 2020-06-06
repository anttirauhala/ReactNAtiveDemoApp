import React, {FunctionComponent} from 'react';

import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

type ButtonProps = {
  text: string;
  onPress: () => void;
  color: string;
};

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  onPress,
  color,
}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: color}]}
    onPress={onPress}>
    <Text style={styles.mainText}>{text}</Text>
  </TouchableOpacity>
);
