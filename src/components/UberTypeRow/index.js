import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/images/UberX.jpg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/images/Comfort.jpg');
    }
    return require('../../assets/images/UberXL.jpg');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={12} />3
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#49be49'} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
