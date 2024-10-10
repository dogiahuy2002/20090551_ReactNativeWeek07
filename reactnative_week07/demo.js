import { Text, StyleSheet, View, Pressable, Image } from 'react-native';
import * as React from 'react';

export default demo = ()=>{
  return(
    <View style={styles.container}>
        <View style={{flex:5, backgroundColor: "red"}}>
        aa
        </View>
        <View style={{flex:5}}>
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },

});