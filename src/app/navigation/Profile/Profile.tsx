import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import About from './About';

const Stack = createStackNavigator();

const Profile: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default Profile;
