import { StatusBar } from 'expo-status-bar';
import React , { useState }from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

const UserPage = (props) =>{

    //temporaey dummy database items
    const [items, setItems] = useState([
        {id:'1', userId: 'U1', name: 'shaun', src:require('../images/newItem.png'), price: 123},
        {id:'2', userId: 'U1', name: 'yoshi', src:require('../images/newItem.png'), price: 123},
        {id:'3', userId: 'U1', name: 'mario', src:require('../images/newItem.png'), price: 123},
        {id:'4', userId: 'U1', name: 'luigi', src:require('../images/newItem.png'), price: 123},
        {id:'5', userId: 'U1', name: 'peach', src:require('../images/newItem.png'), price: 123},
        {id:'6', userId: 'U1', name: 'toad', src:require('../images/newItem.png'), price: 123},
        {id:'7', userId: 'U1', name: 'bowser', src:require('../images/newItem.png'), price: 123},
        {id:'8', userId: 'U1', name: 'shaun', src:require('../images/newItem.png'), price: 123},
        {id:'9', userId: 'U1', name: 'yoshi', src:require('../images/newItem.png'), price: 123},
        {id:'10', userId: 'U1', name: 'mario', src:require('../images/newItem.png'), price: 123},
        {id:'11', userId: 'U1', name: 'luigi', src:require('../images/newItem.png'), price: 123},
        {id:'12', userId: 'U1', name: 'peach', src:require('../images/newItem.png'), price: 123},
        {id:'13', userId: 'U1', name: 'toad', src:require('../images/newItem.png'), price: 123},
        {id:'14', userId: 'U1', name: 'bowser', src:require('../images/newItem.png'), price: 123},
      ]);
      
    return(

        <View style = {styles.container}>
        <View style={styles.header}>
            <Image 
                style={styles.userIcon}
                source={require('../images/userProfilePic.jpg')} 
                />
            <View>
                <Text style={styles.userDetail}>Username Id</Text>
            </View>
            
            
        </View>

        <FlatList 
            numColumns={2}
            keyExtractor={(item) => item.id}
            data={items}
            renderItem={( { item }) => (
            <TouchableOpacity>
                <Image 
                    style={styles.image}
                    source={item.src}
                />
                <Text>{item.name}</Text>
                <Text>RM {item.price}</Text>
            </TouchableOpacity>
            )}
      />     

    </View>
    );
}

export default UserPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //backgroundColor: 'coral',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: 'skyblue',
        
    },
    userDetail: {
        fontSize: 24,
        padding: 25,
        color: '#fff',
        bottom: 15
    },
    userIcon: {
        marginLeft: 40,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    image: {
        alignItems: 'center',
        width: 180,
        height: 160,
    },
})