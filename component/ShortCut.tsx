import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const ShortCut = ({ fontSize = 16, text = 'Button', color = '#000', onPress }) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style ={{flexShrink:1, flexDirection: 'row', backgroundColor: 'red', margin: 10, alignItems: 'center'}}>
      <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
      <Image
        source = {require('../assets/right_chevron1.png')}
        style ={{height: '80%', tintColor: color}}/>
    </TouchableOpacity>
  );
};

export default ShortCut;
