import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import {styles} from './style';

import {Actions} from '../../../redux/auth/actions';
import SubmitButton from '../../../shared/components/SubmitButton';

const Logout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(Actions.logout());
  };

  return (
    <View style={styles.container}>
      <SubmitButton onPress={logout} text="Log Out" />
    </View>
  );
};

export default Logout;
