import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eveniet dolorum natus, nulla officia saepe
        quaerat tempora? Officia, unde eveniet incidunt qui saepe quo laudantium ipsam nihil placeat reprehenderit
        explicabo!
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
