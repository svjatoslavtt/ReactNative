import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Account from './navigation/Account/Account';
import Login from './navigation/Login';
import Settings from './navigation/Settings/Settings';
import Profile from './navigation/Profile/Profile';
import {getToken} from './redux/auth/selectors';
import {Actions} from './redux/auth/actions';
import {RootParamsList} from './shared/interfaces/navigationProps';

const Stack = createStackNavigator<RootParamsList>();
const Tab = createBottomTabNavigator();

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(getToken);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    dispatch(Actions.getAuthToken());
  }, []);

  return (
    <>
      {!token ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Sign in'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName: string = '';
                switch (route.name) {
                  case 'Account':
                    iconName = 'user-circle';
                    break;
                  case 'Profile':
                    iconName = 'id-badge';
                    break;
                  case 'Settings':
                    iconName = 'cog';
                    break;
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            initialRouteName="false"
            tabBarOptions={{
              activeTintColor: 'gray',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
