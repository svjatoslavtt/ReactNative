import React from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './style';

import {getUserData} from '../../../redux/auth/selectors';
import {User} from '../../../shared/interfaces/signIn';

const About: React.FC = () => {
  const profile: User | null = useSelector(getUserData);
  return (
    <View style={styles.container}>
      {profile && profile.photo ? (
        <Image style={styles.avatar} source={{uri: profile.photo}} />
      ) : null}
      <Text style={styles.text}>{profile ? profile.name : 'empty'}</Text>
      <Text style={styles.text}>{profile ? profile.email : 'empty'}</Text>
    </View>
  );
};

export default About;
