import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddressFields from './MyAddresses/AddressFields';
import MyAddresses from './MyAddresses';
import MyAccount from './MyAccount';
import Maps from './MyAddresses/AddressDetails/Maps';
import AddressDetails from './MyAddresses/AddressDetails';

import {RootParamsList} from '../../shared/interfaces/navigationProps';

const Stack = createStackNavigator<RootParamsList>();

const Account: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{title: 'My account'}}
      />
      <Stack.Screen
        name="MyAddresses"
        component={MyAddresses}
        options={{title: 'My addresses'}}
      />
      <Stack.Screen
        name="AddressFields"
        component={AddressFields}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen
        name="AddressDetails"
        component={AddressDetails}
        options={{title: 'Address'}}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{title: 'Location'}}
      />
    </Stack.Navigator>
  );
};

export default Account;
