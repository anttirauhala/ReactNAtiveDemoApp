import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import mainStyles from '../styles';
import {ScrollView} from 'react-native-gesture-handler';

export default class StylingDemo extends React.Component<any> {
  render() {
    return (
      <View style={[mainStyles.container, mainStyles.defaultBackground]}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button1}>
            <Text>Press me!</Text>
          </TouchableOpacity>
          <ScrollView indicatorStyle={'white'}>
            <View style={styles.vertical}>
              <View style={styles.block}>
                <Text>This</Text>
              </View>
              <View style={styles.block}>
                <Text>is</Text>
              </View>
              <View style={styles.block}>
                <Text>row</Text>
              </View>
              <View style={styles.block}>
                <Text>style.</Text>
              </View>
            </View>
            <View style={styles.hr} />
            <View style={styles.horizontal}>
              <View style={styles.block}>
                <Text>This</Text>
              </View>
              <View style={styles.block}>
                <Text>is</Text>
              </View>
              <View style={styles.block}>
                <Text>column</Text>
              </View>
              <View style={styles.block}>
                <Text>style.</Text>
              </View>
            </View>
            <View style={styles.hr} />
            <View style={styles.horizontal}>
              <View style={styles.horizontal}>
                <View style={styles.block}>
                  <Text>In</Text>
                </View>
                <View style={styles.block}>
                  <Text>Row.</Text>
                </View>
              </View>
              <View style={styles.vertical}>
                <View style={styles.block}>
                  <Text>In</Text>
                </View>
                <View style={styles.block}>
                  <Text>column.</Text>
                </View>
              </View>
              <View style={styles.vertical}>
                <View style={styles.block}>
                  <Text>Several</Text>
                </View>
                <View style={styles.block}>
                  <Text>items</Text>
                </View>
                <View style={styles.block}>
                  <Text>in</Text>
                </View>
                <View style={styles.block}>
                  <Text>column.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  button1: {
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33B5FF',
    borderWidth: 1,
    borderColor: '#335BFF',
    borderRadius: 5,
  },
  vertical: {
    flexDirection: 'column',
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'dotted',
  },
  hr: {
    borderWidth: 0,
    height: 1,
    marginVertical: 15,
    borderColor: 'black',
  },
  block: {
    borderWidth: 1,
    borderColor: '#335BFF',
    padding: 10,
    margin: 5,
  },
});
