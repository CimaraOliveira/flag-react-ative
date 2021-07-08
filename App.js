/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

 
export default function App(){
  return(
    <View style={styles.container}> 
      <View style={styles.containerd}>
        <View style={styles.container1}>
          <Text style={styles.texto}>Menu</Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.texto}>Logs</Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.texto}>Credits</Text>
        </View> 
      </View> 
      <View style={styles.container2}>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <View style={styles.container5}></View>
            <View style={styles.container5}></View>
            <View style={styles.container5}></View>
          </View>
          <View style={styles.container6}>
            <View style={styles.container7}></View>
            <View style={styles.container7}></View>
            <View style={styles.container7}></View>
          </View>
          <View style={styles.container8}>
            <View style={styles.container9}>
              <View style={styles.box}></View>
             <View style={styles.box}></View>
             <View style={styles.box}></View>
            </View>
            <View style={styles.container9}>
             <View style={styles.box1}></View>
             <View style={styles.box1}></View>
             <View style={styles.box1}></View>
            </View>
            <View style={styles.container9}>
             <View style={styles.box2}></View>
             <View style={styles.box2}></View>
             <View style={styles.box2}></View>
            </View>
             <View style={styles.box3}></View>
             <View style={styles.box3}></View>
             <View style={styles.box3}></View>
          </View>
        </View>
      </View>
      <View style={styles.rodape}>
          <View style={styles.barra1}>
            <Text style={styles.textorodape}> Exercício 01 - DDM </Text>
          </View>
      </View> 
    </View>

  )
}

  const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#DCDCDC', 
    justifyContent:'center', 
    
  },
  containerd:{
    width:360,
    height:60,
    top:0,
    flexDirection: 'row',
    backgroundColor:'#C0C0C0',
    justifyContent:'center'
  },
  container1:{
    width:80,
    height:30,
    top:3,
    left:2,
    margin:20,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'#000000',
    
  },
  texto:{
    top:5,
    fontSize:12,
    color:'#FFFFF0',
    textAlign:'center',
  },
  container2:{
    flex:1,
    backgroundColor:'#6495ed',
    flexDirection: 'column',
    justifyContent:'center'
    
  },
  
  container3:{
    width:320,
    height:500,
    top:10,
    left:2,
    margin:20,
    marginTop:5,
    borderRadius:10,
    backgroundColor:'#4682B4',
    alignItems:'center',
    
    
  },
  container4:{
   width:280,
   height:130,
   top:25,
   left:2,
   margin:20,
   marginTop:5,
   backgroundColor:'#ADD8E6',
   flexDirection: 'row',
  },
  container5:{
   width:50,
   height:110,
   top:5,
   left:2,
   margin:20,
   marginTop:5,
   backgroundColor:'#000000',
   
  },

  container6:{
   width:280,
   height:130,
   top:25,
   left:2,
   margin:20,
   marginTop:5,
   backgroundColor:'#ADD8E6',
   flexDirection: 'column'
  },
  container7:{
   width:250,
   height:35,
   top:5,
   left:10,
   margin:5,
   marginTop:1,
   backgroundColor:'#000000',
   
  },
  container8:{
   width:280,
   height:130,
   top:25,
   left:2,
   margin:20,
   marginTop:5,
   backgroundColor:'#ADD8E6',
   flexDirection: 'column'
  },
  container9:{
   width:45,
   height:30,
   top:5,
   left:4,
   margin:5,
   marginTop:4,
   backgroundColor:'#000000',
   
  },
  box:{
   width:45,
   height:30,
   top:-4,
   left:50,
   margin:5,
   marginTop:4,
   backgroundColor:'#000000',
   
  },
  box1:{
   width:45,
   height:30,
   top:-43,
   left:105,
   margin:5,
   marginTop:4,
   backgroundColor:'#000000',
   
  },
  box2:{
   width:45,
   height:30,
   top:-82,
   left:160,
   margin:5,
   marginTop:4,
   backgroundColor:'#000000',
   
  },
  box3:{
   width:45,
   height:30,
   top:-112,
   left:225,
   margin:5,
   marginTop:4,
   backgroundColor:'#000000',
   
  },


  rodape:{ 
    backgroundColor:'#A9A9A9', 
  },
  barra1:{
    width:776,
    height:50,
    top:0,
    flexDirection: 'row',
    backgroundColor:'#4b0082',
    
  },
  textorodape:{
    top:3,
    fontSize:20,
    margin:15,
    marginTop:10,
    left:80,
    color:'#FFFFF0',
    textAlign:'center',
  },
  });


