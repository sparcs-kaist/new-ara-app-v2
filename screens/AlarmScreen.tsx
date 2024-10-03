import React from 'react';
import { SafeAreaView, Button, Touchable, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // 네비게이션 훅 및 타입 추가
import { RootStackParamList } from '../App'; // Stack 타입 가져오기
import NavigationBar from '../component/NavigationBar';

const AlarmScreen: React.FC = () => {

  return (
    <SafeAreaView style={styles.container}>
        <Text>알람목록페이지</Text>
        <NavigationBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
})

export default AlarmScreen;
