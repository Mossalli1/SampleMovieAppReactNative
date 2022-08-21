import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Styles} from './styles';
import dayjs from 'dayjs';

let data = [];

const DetailScreen = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailScreen;
