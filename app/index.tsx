import  { useEffect, useState } from 'react';
import { Image, StyleSheet, View, Text, FlatList,TouchableOpacity} from 'react-native';
import { Input } from '@/components/Input';
import { Item } from '@/components/Item';
import Cost from '@/components/cost';
import { getEspetinhos } from '@/api/espetinhos';
import { useEspetinho } from '@/hooks/EspetinhoContext';
import { Espetinho } from '@/model/Espetinho';
import { useRouter  } from 'expo-router';


export default function HomeScreen() {

  const [espetinhos, setEspetinhos] = useState([] as Espetinho[]);
  const { listaEspetinho, addEspetinho, removeEspetinho, clearEspetinhos } = useEspetinho();
  const router = useRouter();

  function handleDetails() {
    router.push('/conta');
  }  
  useEffect(() => {
    const espetinhosList = getEspetinhos();
    setEspetinhos(espetinhosList);
  }, []);

  return (
    <View style={ styles.container }>
      <Text style={styles.textHead}>CARDÁPIO</Text>
      <View style={styles.containerList}>
        <FlatList data={espetinhos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Item item={item}  add={addEspetinho} remove={removeEspetinho} />
          )}
        />              
      </View>
        <TouchableOpacity onPress={()=>handleDetails()}>
          <Text>Ver Detalhes</Text>
        </TouchableOpacity> 
      <Cost/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor: "#28385E", 
    paddingTop: 80,
    justifyContent: "space-between"
  },
  containerList:{
    maxWidth: "80%",
    maxHeight: "80%",
    alignContent: "center",
    justifyContent: "center",
    alignItems:"center"
  },
  textTitle:{
    fontSize: 25,
    fontWeight: "bold"
  },
  textHead:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  }
});
