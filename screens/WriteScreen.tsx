import React, {useState} from 'react';
import { SafeAreaView, Button, Touchable, TouchableOpacity, Text, StyleSheet, Image, View, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // 네비게이션 훅 및 타입 추가
import { RootStackParamList } from '../App'; // Stack 타입 가져오기
import NavigationBar from '../component/NavigationBar';

const WriteScreen: React.FC = () => {
  const [board, setBoard] = useState('freeBoard');
  const [tag, setTag] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [anonymous, setAnonymouse] = useState(false);
  const [adult, setAdult] = useState(false);
  const [political, setPolitical] = useState(false);
  const isButtonActive = title.trim() !== '' && text.trim() !== '';
  return (
    <SafeAreaView style={styles.container}>
      {/* Banner */}
      <View style = {{width: '100%', height: 47, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12,}}>
        <Image source= {require('../assets/close.png')} style ={{width: 35, height: 35}}/>
        <Text style={{fontSize: 18, color: '#ED3A3A'}}>글 쓰기</Text>
        <TouchableOpacity 
          style={[styles.uploadButton, isButtonActive && styles.activeUploadButton]} // 조건부 스타일 적용
          disabled={!isButtonActive} // 비활성화 상태
        >
        {/* <TouchableOpacity style={{borderWidth: 1, borderColor: '#F0F0F0', borderRadius: 10, height: 35, width: 65, justifyContent: 'center', alignItems: 'center'}}> */}
          <Text style={[{color: '#F0F0F0'}, isButtonActive&&{color: 'white'}]}>올리기</Text>
        </TouchableOpacity>
      </View>

      {/* 게시판이랑 말머리 선택 */}
      <View style ={{flexDirection: 'row'}}>
          <Text>자유게시판</Text>
          <Text>말머리</Text>
        </View>

      {/* 제목입력 */}
      <TextInput 
        style={{height: 50, width: '80%'}}
        placeholder="제목을 입력해주세요"
        value={title}
        onChangeText={setTitle}/>

      {/* 내용 입력 */}
      <TextInput 
        style={{height: 50, width: '80%'}}
        placeholder="내용을 입력해주세요"
        value={text}
        onChangeText={setText}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 10,
    height: 35,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeUploadButton: {
    borderWidth: 1,
    borderColor: '#ED3A3A',
    backgroundColor: '#ED3A3A',
    borderRadius: 10,
    height: 35,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WriteScreen;
