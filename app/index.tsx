import { Image, StyleSheet, View, Text } from 'react-native';
import { Input } from '@/components/Input';
import { Item } from '@/components/Item';
export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <View style={styles.containerForm}>
        <Item/>
        <Item/>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor: "#28385E" //
  },
  containerForm:{
    marginTop: 100,
    maxWidth: "80%",
    alignContent: "center",
    justifyContent: "center",
    alignItems:"center"
  },
  textTitle:{
    fontSize: 25,
    fontWeight: "bold"
  }
});
