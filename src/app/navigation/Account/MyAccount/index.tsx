import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {LINKS} from './links';
import {styles} from './style';

import {
  RootParamsList,
  Routes,
} from '../../../shared/interfaces/navigationProps';

type HomeNavigationProp = StackNavigationProp<RootParamsList, 'MyAccount'>;

interface MyAccountProps {
  navigation: HomeNavigationProp;
}

const MyAccount: React.FC<MyAccountProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.myAccount}>
        <FlatList
          data={LINKS}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate(item.nav as Routes)}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <View style={styles.arrow} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default MyAccount;
