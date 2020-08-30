import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';

import {RootParamsList} from '../../../../shared/interfaces/navigationProps';
import {getAddressesEntities} from '../../../../redux/addresses/selectors';
import SubmitButton from '../../../../shared/components/SubmitButton';
import {Actions} from '../../../../redux/addresses/actions';

interface MyAccountProps {
  navigation: StackNavigationProp<RootParamsList, 'AddressDetails'>;
  route: RouteProp<RootParamsList, 'AddressDetails'>;
}

const AddressDetails: React.FC<MyAccountProps> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const currentAddress = useSelector(getAddressesEntities).find(
    ({id}) => id === route.params.id,
  );

  const onDelete = (id: number) => {
    dispatch(Actions.deleteAddress(id));
    navigation.goBack();
  };

  const handleRouter = (nav: string, edit?: boolean, id?: number) => {
    navigation.navigate(nav as 'AddressFields', {
      name: 'Edit',
      edit,
      id,
    });
  };

  return (
    <>
      <View style={styles.detail}>
        <View style={styles.field}>
          <Text style={styles.text}>Address:</Text>
          <Text style={styles.text}>
            {currentAddress && currentAddress.address}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.text}>Apartment:</Text>
          <Text style={styles.text}>
            {currentAddress && currentAddress.apartmentNumber}
          </Text>
        </View>

        <View style={styles.field}>
          <Text style={styles.text}>Comment: </Text>
          <Text style={styles.text}>
            {currentAddress && currentAddress.comment}
          </Text>
        </View>
      </View>

      <SubmitButton text="Open map" onPress={() => handleRouter('Maps')} />
      <SubmitButton
        text="Edit"
        onPress={() => handleRouter('AddressFields', true, route.params.id)}
      />
      <SubmitButton
        text="Delete"
        type="delete"
        onPress={() => currentAddress && onDelete(currentAddress.id)}
      />
    </>
  );
};

export default AddressDetails;
