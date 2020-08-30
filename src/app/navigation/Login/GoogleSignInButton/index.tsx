import React, {useEffect} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import {useDispatch} from 'react-redux';

import {Actions} from '../../../redux/auth/actions';

const GoogleSignInButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(Actions.login());
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '392257142530-1vmvef20b80helcurdoo4ljotgv275fp.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  return (
    <GoogleSigninButton
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={handleSignIn}
    />
  );
};

export default GoogleSignInButton;
