import { View,Text,TextInput, StyleSheet,TextInputProps } from 'react-native';

interface InputProp extends TextInputProps {
  placeholder: string;
}

export function Input({ placeholder, ...rest}: InputProp){
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} {...rest}
       placeholderTextColor="#7C7C8A"
      style={ styles.textLabel}/>
    </View>  
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 16,
        width: '100%',
        backgroundColor: '#121214',
        height: 56,
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 8,
    },
    textLabel: {
        color: '#7C7C8A',
        marginLeft: 8,
        fontSize: 16,
    } 
});