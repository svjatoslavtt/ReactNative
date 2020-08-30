import React, {useEffect, useState} from 'react';
import {ScrollView, TextInput, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {styles} from './style';

import SubmitButton from '../../../../shared/components/SubmitButton';
import {Address, AddressFieldsData} from '../../../../redux/addresses/state';
import {Actions} from '../../../../redux/addresses/actions';
import {getAddressesEntities} from '../../../../redux/addresses/selectors';
import {RootParamsList} from '../../../../shared/interfaces/navigationProps';

interface MyAccountProps {
  navigation: StackNavigationProp<RootParamsList, 'AddressFields'>;
  route: RouteProp<RootParamsList, 'AddressFields'>;
}

const AddressAction: React.FC<MyAccountProps> = ({navigation, route}) => {
  const dispatch = useDispatch();

  const currentAddress: Address | undefined = useSelector(
    getAddressesEntities,
  ).find(({id}) => id === route.params.id);

  const [fieldsData, setFieldsData] = useState<Address | AddressFieldsData>({
    address: '',
    apartmentNumber: '',
    comment: '',
  });

  const isEmptyFields = Object.values({
    address: fieldsData.address,
    apartmentNumber: fieldsData.apartmentNumber,
    comment: fieldsData.comment,
  }).every((item) => item === '');

  useEffect(() => {
    if (route.params?.edit && currentAddress) {
      setFieldsData(currentAddress);
    }
  }, [route.params, currentAddress]);

  const handleSubmitButton = () => {
    if (isEmptyFields) {
      return false;
    } else if (route.params?.edit) {
      dispatch(Actions.editAddress(fieldsData as Address));
      navigation.goBack();
    } else {
      dispatch(Actions.addAddress(fieldsData));
      navigation.goBack();
    }
  };

  const onChangeAddress = (text: string) => {
    const newValue: AddressFieldsData = {
      ...fieldsData,
      address: text,
    };

    setFieldsData(newValue);
  };

  const onChangeApartmentNumber = (text: string) => {
    const newValue: AddressFieldsData = {
      ...fieldsData,
      apartmentNumber: text,
    };

    setFieldsData(newValue);
  };

  const onChangeComment = (text: string) => {
    const newValue: AddressFieldsData = {
      ...fieldsData,
      comment: text,
    };

    setFieldsData(newValue);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeAddress}
              value={fieldsData.address}
              placeholder="Address"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeApartmentNumber}
              value={fieldsData.apartmentNumber}
              placeholder="Apartment number"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeComment}
              value={fieldsData.comment}
              placeholder="Add a comment (optional)"
            />
            {isEmptyFields && (
              <Text style={styles.required}>All fields are required!</Text>
            )}
          </View>
          <SubmitButton
            onPress={handleSubmitButton}
            text={route.params?.edit ? 'Done' : 'Add Address'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddressAction;
