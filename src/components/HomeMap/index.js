import React from 'react';
import {FlatList, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = () => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}>
      {cars.map(car => (
        <Marker key={car.id} coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image style={{width: 70, height: 70, resizeMode: 'contain'}} source={getImage(car.type)} />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;