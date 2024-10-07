import React from 'react';
import { Text, Image, View } from 'react-native';

const LikeSet = ({like, dislike, comment}) => {
  return (<View style={{flexDirection: 'row'}}>
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
        <Image source = {require('../assets/like.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#ED3A3A'}}>{like}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/dislike.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#538DD1'}}>{dislike}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
                            <Image source = {require('../assets/comment1.png')}
                            style = {{width: 20, height: 20}}/>
                            <Text style = {{fontSize: 12, color: '#636363'}}>{comment}</Text>
                        </View></View>
  );
};

export default LikeSet;
