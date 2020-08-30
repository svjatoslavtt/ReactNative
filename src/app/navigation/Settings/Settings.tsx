import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logout from './Logout';
import SettingsList from './SettingsList';

import {RootParamsList} from '../../shared/interfaces/navigationProps';

const Stack = createStackNavigator<RootParamsList>();

const Settings: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsList"
        component={SettingsList}
        options={{title: 'Settings'}}
      />
      <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default Settings;
