import React from 'react';
import {View} from 'react-native';

import {styles} from './style';
import GoogleSignInButton from './GoogleSignInButton';

const Login = () => {
  return (
    <View style={styles.container}>
      <GoogleSignInButton />
    </View>
  );
};

export default Login;
