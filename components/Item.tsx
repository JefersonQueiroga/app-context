import { View,Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native';



export function Item(){
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.text}>Espetinho Carne de Boi teste tes</Text>
            <Text>Quantidade: 01</Text>
        </View>
            <View style={styles.containerButton} >    
                <TouchableOpacity style={styles.buttonUp}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDown}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>    
   </View>  
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingLeft: 16,
        width: '100%',
        backgroundColor: '#304163',
        height: 80,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
    },
    containerDescription:{
        flexDirection:"column"
    },
    containerButton:{
        flexDirection:"row",
        height:"100%"
    },
    buttonUp:{
        width:56,
        backgroundColor:"#0E9577",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonDown:{
        width:56,
        backgroundColor:"#F22424",
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        fontSize: 15,
        color: '#FFFFFF'
    }

});