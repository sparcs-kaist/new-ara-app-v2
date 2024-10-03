import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import ShortCut from '../component/ShortCut';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // 네비게이션 훅 및 타입 추가
import { RootStackParamList } from '../App'; // Stack 타입 가져오기
import LikeSet from '../component/LikeSet';
import NavigationBar from '../component/NavigationBar';

const HomeScreen:React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // 네비게이션 객체의 타입 지정
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.banner}>
                <View style={styles.redLine}/>
                <Image
                    source={require('../assets/ara_logo.png')}
                    style={styles.bannerLogo}/>
                <TouchableOpacity
                    style={styles.bannerPost}
                    onPress={() => navigation.navigate("Write")}>
                    <Image 
                        source={require('../assets/post.png')}
                        style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bannerSearch}>
                    <Image 
                        source={require('../assets/search.png')}
                        style={styles.icon} />
                </TouchableOpacity>
            </View>

            <ScrollView style = {{width: '100%'}}>
            {/* 실시간 인기글 */}
            <View style = {styles.trendingPosts}>
                <ShortCut
                    fontSize = {20}
                    text="실시간 인기글"
                    color = "#333333"
                    onPress={() =>  navigation.navigate("LogIn")}/>
                <View style = {styles.RankingComponent}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ED3A3A'}}>1</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333', position: 'absolute', marginLeft: 35, marginTop: 5}}>제목제목제목</Text>
                    <View style={{flexDirection: 'row', position: 'absolute', marginLeft: 35, marginTop: 27}}>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB'}}>글쓴이</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB', marginLeft: 10,}}>n분 전</Text>
                    </View>
                    <View style={{position: 'absolute', marginLeft: 280, marginTop: 25}}>
                        <LikeSet like = {1} dislike = {2} comment = {3}/>
                    </View>
                </View>
                <View style = {styles.RankingComponent}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ED3A3A'}}>2</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333', position: 'absolute', marginLeft: 35, marginTop: 5}}>제목제목제목</Text>
                    <View style={{flexDirection: 'row', position: 'absolute', marginLeft: 35, marginTop: 27}}>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB'}}>글쓴이</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB', marginLeft: 10,}}>n분 전</Text>
                    </View>
                    <View style={{flexDirection: 'row', position: 'absolute', marginLeft: 280, marginTop: 25}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/like.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#ED3A3A'}}>8</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/dislike.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#538DD1'}}>8</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/comment1.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#636363'}}>8</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.RankingComponent}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', color: '#ED3A3A'}}>3</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333333', position: 'absolute', marginLeft: 35, marginTop: 5}}>제목제목제목</Text>
                    <View style={{flexDirection: 'row', position: 'absolute', marginLeft: 35, marginTop: 27}}>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB'}}>글쓴이</Text>
                        <Text style={{fontSize: 12, fontWeight: 'normal', color: '#BBBBBB', marginLeft: 10,}}>n분 전</Text>
                    </View>
                    <View style={{flexDirection: 'row', position: 'absolute', marginLeft: 280, marginTop: 25}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/like.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#ED3A3A'}}>8</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/dislike.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#538DD1'}}>8</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/comment1.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#636363'}}>8</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* 공지 */}
            <View style = {{width: '100%', padding: 25,}}> 
                <ShortCut
                    fontSize = {20}
                    text="공지"
                    color = "#333333"
                    onPress={() =>  navigation.navigate("LogIn")}/>
                <View style ={{width: '100%', height: 220, borderRadius: 15, borderColor: '#F0F0F0', borderWidth: 1, alignItems: 'center'}}>
                    <View style ={{padding: 10, alignItems: 'flex-start'}}>
                        <ShortCut
                            fontSize = {14}
                            text="포탈공지"
                            color = "#1F4899"
                            onPress={() =>  navigation.navigate("LogIn")}/>
                        <Text> 제목 1 </Text>
                        <Text> 제목 2 </Text>
                        <Text> 제목 2 </Text>
                    </View>
                    <View style={{width: '90%', height: 0.99, backgroundColor: '#F0F0F0'}}/>
                    <View style ={{padding: 10, flexDirection: 'row'}}>
                        <ShortCut
                            fontSize = {14}
                            text="입주 업체"
                            color = "#646464"
                            onPress={() =>  navigation.navigate("LogIn")}/>
                        <Text> 제목 1</Text>
                        <ShortCut
                            fontSize = {14}
                            text="뉴아라"
                            color = "#ED3A3A"
                            onPress={() =>  navigation.navigate("LogIn")}/>
                        <Text> 제목 2</Text>
                    </View>
                </View>

            </View>

            {/* 학생단체 */}
            <View style = {{width: '100%', padding: 25,}}>
            <ShortCut
                    fontSize = {20}
                    text="학생 단체"
                    color = "#333333"
                    onPress={() =>  navigation.navigate("LogIn")}/>
                <View style ={{width: '100%', height: 220, borderRadius: 15, borderColor: '#F0F0F0', borderWidth: 1, alignItems: 'center'}}>
                    <View style ={{padding: 10, alignItems: 'flex-start'}}>
                        <Text> 포탈 공지 </Text>
                        <Text> 제목 1 </Text>
                        <Text> 제목 2 </Text>
                        <Text> 제목 2 </Text>
                    </View>
                    <View style={{width: '90%', height: 0.99, backgroundColor: '#F0F0F0'}}/>
                    <View style ={{padding: 10}}>
                        <Text>입주업체</Text>
                        <Text> 제목 1</Text>
                        <Text> 뉴아라</Text>
                        <Text> 제목 2</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            <NavigationBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    banner: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center', // 중앙 정렬
    },
    redLine: {
        width: '100%',
        height: 5,
        backgroundColor: '#ED3A3A',
        position: 'absolute',
        top: 0,
    },
    bannerLogo: {
        width: 73.7,
        height: 40,
        marginLeft: 25,
    },
    bannerPost: {
        justifyContent: 'center', // 아이콘 버튼 내에서 중앙 정렬
        alignItems: 'center',
        position: 'absolute',
        marginTop: 12,
        marginLeft: 350
    },
    bannerSearch: {
        justifyContent: 'center', // 아이콘 버튼 내에서 중앙 정렬
        alignItems: 'center',
        position: 'absolute',
        marginTop: 12,
        marginLeft: 400
    },
    icon: {
        width: 36,
        height: 36,
    },
    trendingPosts: {
        width: '100%',
        padding: 25
    }, 
    trendingTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#333333'
    },
    trendingText: {
        fontSize: 20
    },
    rightChevron: {
        width: 22,
        height: 22
    },
    RankingComponent: {
        width: '100%',
        height: 52.15,
        padding: 10,
        marginTop: 10,
        backgroundColor: 'yellow'
    },
    ranking: {
        fontSize: 22,
        color: '#ED3A3A',
    }
});

export default HomeScreen;
