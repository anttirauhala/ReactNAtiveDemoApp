import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import mainStyles from '../styles';

export default class ScrollDemo extends React.Component<any> {
  render() {
    return (
      <View style={[mainStyles.container, mainStyles.defaultBackground]}>
        <View style={styles.upperContainer}>
          <Text>Lorem Ipsum text reader</Text>
        </View>
        <ScrollView>
          <Text style={mainStyles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            diam sit amet nisl. Odio morbi quis commodo odio aenean sed
            adipiscing. Sed felis eget velit aliquet sagittis. Ultricies lacus
            sed turpis tincidunt id aliquet risus feugiat in. Ultricies mi quis
            hendrerit dolor. Aliquam eleifend mi in nulla. Eget arcu dictum
            varius duis. Augue lacus viverra vitae congue eu consequat. At
            volutpat diam ut venenatis. Vivamus at augue eget arcu dictum varius
            duis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.
            Turpis in eu mi bibendum. Accumsan tortor posuere ac ut consequat.
            Aliquam vestibulum morbi blandit cursus risus at. Non consectetur a
            erat nam at lectus. Quis enim lobortis scelerisque fermentum dui
            faucibus in ornare quam. Velit laoreet id donec ultrices tincidunt
            arcu. Ornare aenean euismod elementum nisi quis eleifend.
          </Text>

          <Text style={mainStyles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            diam sit amet nisl. Odio morbi quis commodo odio aenean sed
            adipiscing. Sed felis eget velit aliquet sagittis. Ultricies lacus
            sed turpis tincidunt id aliquet risus feugiat in. Ultricies mi quis
            hendrerit dolor. Aliquam eleifend mi in nulla. Eget arcu dictum
            varius duis. Augue lacus viverra vitae congue eu consequat. At
            volutpat diam ut venenatis. Vivamus at augue eget arcu dictum varius
            duis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.
            Turpis in eu mi bibendum. Accumsan tortor posuere ac ut consequat.
            Aliquam vestibulum morbi blandit cursus risus at. Non consectetur a
            erat nam at lectus. Quis enim lobortis scelerisque fermentum dui
            faucibus in ornare quam. Velit laoreet id donec ultrices tincidunt
            arcu. Ornare aenean euismod elementum nisi quis eleifend.
          </Text>

          <Text style={mainStyles.mainText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            diam sit amet nisl. Odio morbi quis commodo odio aenean sed
            adipiscing. Sed felis eget velit aliquet sagittis. Ultricies lacus
            sed turpis tincidunt id aliquet risus feugiat in. Ultricies mi quis
            hendrerit dolor. Aliquam eleifend mi in nulla. Eget arcu dictum
            varius duis. Augue lacus viverra vitae congue eu consequat. At
            volutpat diam ut venenatis. Vivamus at augue eget arcu dictum varius
            duis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.
            Turpis in eu mi bibendum. Accumsan tortor posuere ac ut consequat.
            Aliquam vestibulum morbi blandit cursus risus at. Non consectetur a
            erat nam at lectus. Quis enim lobortis scelerisque fermentum dui
            faucibus in ornare quam. Velit laoreet id donec ultrices tincidunt
            arcu. Ornare aenean euismod elementum nisi quis eleifend.
          </Text>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Text>This is fixed bottom View</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33B5FF',
  },
  bottomContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33B5FF',
  },
});
