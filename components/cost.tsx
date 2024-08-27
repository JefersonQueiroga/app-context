import {View,Text,StyleSheet} from 'react-native';

export default function Cost() {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>Valor da Despesa R$: 12,00</Text>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#121214',
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    textLabel: {
        color: '#7C7C8A',
        fontSize: 18,
        fontWeight: "bold",
    }
});
