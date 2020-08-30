import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';

import {styles} from './style';

import SubmitButton from '../../../shared/components/SubmitButton';
import {getAddressesEntities} from '../../../redux/addresses/selectors';
import {Actions} from '../../../redux/addresses/actions';
import {RootParamsList} from '../../../shared/interfaces/navigationProps';
import {Address} from '../../../redux/addresses/state';

interface MyAccountProps {
  navigation: StackNavigationProp<RootParamsList, 'MyAddresses'>;
}

const MyAddress: React.FC<MyAccountProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const addresses = useSelector(getAddressesEntities);

  useEffect(() => {
    dispatch(Actions.getLocalStorageData());
  }, [dispatch]);

  const handleSelectAddress = (id: number) => {
    navigation.navigate('AddressDetails', {id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.main}>
        <View>
          {addresses.length ? (
            addresses.map((item: Address) => (
              <TouchableOpacity
                key={item.id}
                style={styles.detail}
                onPress={() => handleSelectAddress(item.id)}>
                <View style={{width: '100%'}}>
                  <Text style={styles.textId}>{item.id}</Text>
                  <Text style={styles.text}>Address: {item.address}</Text>
                  <Text style={styles.text}>
                    Apartment: {item.apartmentNumber}
                  </Text>
                  <Text style={styles.text}>Comment: {item.comment}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.empty}>No addresses</Text>
          )}
        </View>
        <SubmitButton
          onPress={() =>
            navigation.navigate('AddressFields', {name: 'Add new address'})
          }
          text="Add new"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAddress;
