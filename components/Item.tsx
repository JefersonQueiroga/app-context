import { View,Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { Espetinho } from '@/model/Espetinho';


interface EspetinhoPros{
    item: Espetinho;
    add: (espetinho: Espetinho) => void;
    remove: (id: number) => void;
}

export function Item({item,add,remove}: EspetinhoPros){

    
    return (
        <View style={styles.container}>
            <View style={styles.containerDescription}>
                <Text style={styles.text}>{item.name}</Text>
                <Text>Preço: {item.price}</Text>
            </View>
            <View style={styles.containerButton} >    
                <TouchableOpacity style={styles.buttonUp} onPress={()=>add(item)}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDown} onPress={()=>remove(item.id)}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>    
    </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#304163',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
    },
    containerDescription:{
        flexDirection:"column",
        width:"70%",
    },
    containerButton:{
        flexDirection:"row",
        height:"100%",
        width:"30%",
        
    },
    buttonUp:{
        backgroundColor:"#0E9577",
        alignItems: "center",
        justifyContent: "center",
        flex:1
    },
    buttonDown:{
        backgroundColor:"#F22424",
        alignItems: "center",
        justifyContent: "center",
        flex:1
    },
    text:{
        fontSize: 15,
        color: '#FFFFFF',
     }

});