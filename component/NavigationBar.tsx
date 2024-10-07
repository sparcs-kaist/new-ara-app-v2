import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp, useNavigationState } from '@react-navigation/native'; // 타입 임포트
import { RootStackParamList } from '../App'; // RootStackParamList 타입 가져오기

const NavigationBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 타입 명시

  const onNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen); // 정확한 타입으로 호출
  };

  const currentRoute = useNavigationState((state:any) => state.routes[state.index].name);

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Home')}>
        <Image
          source={currentRoute === 'Home'
            ? require('../assets/nav_home_activated.png')
            : require('../assets/nav_home_unactivated.png')}
          style={styles.navIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('BoardList')}>
        <Image
          source={currentRoute === 'BoardList'
            ? require('../assets/nav_boards_activated.png')
            : require('../assets/nav_boards_unactivated.png')}
          style={styles.navIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('ChatList')}>
        <Image
          source={currentRoute === 'ChatList'
            ? require('../assets/nav_chat_activated.png')
            : require('../assets/nav_chat_unactivated.png')}
          style={styles.navIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Alarm')}>
        <Image
          source={currentRoute === 'Alarm'
            ? require('../assets/nav_alarm_activated.png')
            : require('../assets/nav_alarm_unactivated.png')}
          style={styles.navIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => onNavigate('Profile')}>
        <Image
          source={currentRoute === 'Profile'
            ? require('../assets/nav_profile_activated.png')
            : require('../assets/nav_profile_unactivated.png')}
          style={styles.navIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default NavigationBar;
