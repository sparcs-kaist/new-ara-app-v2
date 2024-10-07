import React from 'react';
import { SafeAreaView, Button, Touchable, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // 네비게이션 훅 및 타입 추가
import { RootStackParamList } from '../App'; // Stack 타입 가져오기

const LogInScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 네비게이션 객체의 타입 지정

  const handleLogin = () => {
    navigation.navigate('Home'); // 'Home'으로 네비게이트
  };

  return (
    <SafeAreaView style={styles.container}>
        <Image
          source = {require('../assets/ara_logo.png')}
          style = {styles.logoImage}/>
        <TouchableOpacity
            onPress = {handleLogin}
            style = {styles.logInButton}>
            <Text style = {styles.logInText}>Sparcs SSO로 로그인</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  logoImage: {
    width: 200,
    marginTop: 324
  },
  logInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#ED3A3A',
    marginTop: 720,
    position: 'absolute'
  },
  logInText: {
    fontSize: 18,
    color: 'white'
  }
})

export default LogInScreen;
