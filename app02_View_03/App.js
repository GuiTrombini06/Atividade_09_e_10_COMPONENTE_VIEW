import React from 'react';
import {View, Text} from 'react-native';

function App(){
  return(
      <View style = {{ flex: 1, flexDirection: 'column-reverse',justifyContent:'space-around', padding: 50, backgroundColor: 'orange'}}>
        <View style = {{ width:70, height: 70, backgroundColor: 'powderblue'}}></View>
        <View style = {{ width:70, height: 70, backgroundColor: 'skyblue'}}></View>
        <View style = {{ width:70, height: 70, backgroundColor: 'blue'}}></View>
      </View>
  );
}
export default App;