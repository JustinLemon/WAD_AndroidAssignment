import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import {ScrollView,TouchableHighlight, TextInput ,StyleSheet, Text, View, Pressable } from 'react-native';

const SellItem = () =>{
  const [name,SetName] = useState('');
  const [price,SetPrice] = useState('');
  const [category, SetCategory] =useState('');
  const [description,SetDescription] = useState('');
  const [isNew, setisNew] = useState(false);
  const [isUsed, setisUsed] = useState(false);
  const [delivery, setDelivery] = useState({isPoslaju:false,isNinjaVan:false,isDHL:false, isPickup:false})

  const postisNew = () =>{
    setisNew(!isNew)
    setisUsed(false)
  }
  const postisUsed = () =>{
    setisNew(false)
    setisUsed(!isUsed)
  }

  const postisPoslaju = () =>{
    setDelivery({isPoslaju:!delivery.isPoslaju, isNinjaVan:false, isDHL:false, isPickup:false})
  }
  const postisNinjaVan = () =>{
    setDelivery({isPoslaju:false, isNinjaVan:!delivery.isNinjaVan, isDHL:false, isPickup:false})
  }
  const postisDHL = () =>{
    setDelivery({isPoslaju:false, isNinjaVan:false, isDHL:!delivery.isDHL, isPickup:false})
  }
  const postisPickup = () =>{
    setDelivery({isPoslaju:false, isNinjaVan:false, isDHL:false, isPickup:!delivery.isPickup})
  }
  
  
  return(

        <View style={styles.container}>
        <ScrollView>
          <View style={styles.row}>
              <Text style={styles.label}>
                  Item name:
              </Text>
              <TextInput 
                     underlineColorAndroid ='transparent' 
                      style={styles.input}
                      onChangeText={(value)=>SetName(value)} 
                      placeholder='Name your item'
                      keyboardAppearance="dark"
              />
          </View>
          <View style={styles.row}>
              <Text style={styles.label}>
                  Price ($):
              </Text>
              <TextInput
                      underlineColorAndroid ='transparent' 
                      multiline
                      style={styles.input}
                      onChangeText={(value)=>SetDescription(value)} 
                      placeholder='Price of your listing'
                      keyboardType='decimal-pad'
                      keyboardAppearance="dark"
              />
          </View>
          <View style={styles.row}>
              <Text style={styles.label}>
                  Category:
              </Text>
              <TextInput 
                     underlineColorAndroid ='transparent' 
                      style={styles.input}
                      onChangeText={(value)=>SetCategory(value)} 
                      placeholder='Name a category'
                      keyboardAppearance="dark"
              />
          </View>

          
               
              <View style>
                      <Text style={styles.label}>Conditions :</Text>
                      <View style={styles.row}>
                      <TouchableHighlight style={[{backgroundColor: isUsed? '#696979':'white'},styles.button]}  onPress={postisUsed} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:isUsed?'#ffff':'#000000'},styles.text]}>
                                    Used
                              </Text>                  
                      </TouchableHighlight>
                      <TouchableHighlight style={[{backgroundColor: isNew? '#696979':'white'},styles.button]}  onPress={postisNew} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:isNew?'#ffff':'#000000'},styles.text]}>
                                  Brand new
                              </Text>                  
                      </TouchableHighlight>
                      </View>
              </View>
              <View style={styles.col}>
              <Text style={styles.label}>
                  Description [optional]:
              </Text>
              <TextInput
                      underlineColorAndroid ='transparent' 
                      multiline
                      style={[{width:"95%",height:180,padding:5,borderWidth:1,borderColor:'#7777',borderRadius:6,textAlign:'justify',alignItems:'flex-start',marginRight:10,marginLeft:10}]}
                      onChangeText={(value)=>SetPrice(value)} 
                      placeholder='Describe what you are selling and incllude details such as brand, payment & postage info, estimated time of delivery, warranty and other Terms & Conditions...'
                      keyboardAppearance="dark"
              />
          </View>

              <View>
                <Text style={styles.label}>Delivery Options: </Text>
                    <View style={styles.row}>
                      <TouchableHighlight style={[{backgroundColor: delivery.isPoslaju? '#696979':'white'},styles.button]}  onPress={postisPoslaju} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:delivery.isPoslaju?'#ffff':'#000000'},styles.text]}>
                                    Poslaju
                              </Text>                  
                      </TouchableHighlight>
                      <TouchableHighlight style={[{backgroundColor: delivery.isNinjaVan? '#696979':'white'},styles.button]}  onPress={postisNinjaVan} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:delivery.isNinjaVan?'#ffff':'#000000'},styles.text]}>
                                    NinjaVan
                              </Text>                  
                      </TouchableHighlight>                      
                      </View>
                      <View style={styles.row}>
                      <TouchableHighlight style={[{backgroundColor: delivery.isDHL? '#696979':'white'},styles.button]}  onPress={postisDHL} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:delivery.isDHL?'#ffff':'#000000'},styles.text]}>
                                    DHL
                              </Text>                  
                      </TouchableHighlight>
                      <TouchableHighlight style={[{backgroundColor: delivery.isPickup? '#696979':'white'},styles.button]}  onPress={postisPickup} activeOpacity={0.5} underlayColor='#cc99'>
                              <Text style={[{color:delivery.isPickup?'#ffff':'#000000'},styles.text]}>
                                    Self-Pickup
                              </Text>                  
                      </TouchableHighlight>
                      </View>
              </View>
                           <View style={[{position:'relative', flexDirection:'row',bottom:0,marginTop:80}]}>
                           <Pressable
                              style={({ pressed }) => [{ backgroundColor: pressed ? '#8C001A' : 'white', borderColor: pressed ? 'white' : '#8C001A', width:200,borderWidth:3, borderRadius:5,alignItems:'center',padding:10 }]}>
                              {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'white' : '#8C001A', fontWeight:'bold', fontSize:25}, styles.text]}>
                                  Cancel
                                </Text>
                              )}
                            </Pressable>
                            <Pressable
                              style={({ pressed }) => [{ backgroundColor: pressed ? '#1c2e4a' : 'white', borderColor: pressed ? 'white' : '#8080ff', width:200,borderWidth:3, borderRadius:5,alignItems:'center',padding:10 }]}>
                              {({ pressed }) => (
                                <Text style={[{ color: pressed ? 'white' : '#1c2e4a', fontWeight:'bold', fontSize:25}, styles.text]}>
                                  Confirm
                                </Text>
                              )}
                            </Pressable>
                          </View>
              <View>

              </View>
              </ScrollView>
        </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:60
    
  },
  label:{
    color:'black',
    fontSize: 12,
    fontStyle:"normal",
    marginLeft:9,
    marginTop:20,
    textTransform:'uppercase',
    fontWeight:'bold',
    width:100
  },
  picture:{

  },
  input:{
    width: 200,
    height: 50,
    padding:5,borderWidth:1
    ,borderColor:'#7777'
    ,borderRadius:6
    ,textAlign:'justify'
    ,alignItems:'flex-start'
    ,fontSize:15
    ,fontWeight:'100'
  },
  button: {
    alignItems:'center',
    padding: 10,
    borderColor: "#696979",
    borderWidth: 0.5,
    borderRadius: 5,
    width:140
  },
  row:{
    flexDirection:"row",
  },
  col:{
    marginTop:22,
    flexDirection:"column",
  },
  confirm:{
      
  }

});

export default SellItem;