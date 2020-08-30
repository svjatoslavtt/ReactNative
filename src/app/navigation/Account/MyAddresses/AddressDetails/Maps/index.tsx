import React, {useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {styles} from './style';

interface Location {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Maps: React.FC = () => {
  const [regionState, setRegionState] = useState<Location>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const onRegionChange = (region: Location) => {
    setRegionState(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={regionState}
        onRegionChange={onRegionChange}
      />
    </View>
  );
};

export default Maps;
