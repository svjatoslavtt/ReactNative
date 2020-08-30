import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {DATA} from './formFields';

import {styles} from '../../Account/MyAccount/style';
import {RootParamsList, Routes} from '../../../shared/interfaces/navigationProps';

type HomeNavigationProp = StackNavigationProp<RootParamsList, Routes>;

interface MyAccountProps {
  navigation: HomeNavigationProp;
}

const SettingsList: React.FC<MyAccountProps> = ({navigation}) => {
  return (
    <View style={styles.myAccount}>
      <FlatList
        data={DATA}
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
  );
};

export default SettingsList;
