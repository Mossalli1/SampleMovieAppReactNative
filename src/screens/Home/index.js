import * as React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {Styles} from './styles';
import {FONTSIZE} from '@constants';
import dayjs from 'dayjs';
import {useDispatch, useSelector} from 'react-redux';

let data = [];

const HomeScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>Hello Bangladesh</Text>
    </View>
  );
};

export default HomeScreen;
