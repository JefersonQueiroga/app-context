import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useEspetinho } from '@/hooks/EspetinhoContext';
import { Espetinho } from '@/model/Espetinho';


interface EspetinhoData extends Espetinho {
    amount: number;
  }

export default function ContaScreen() {
  const { listaEspetinho } = useEspetinho(); // Pegando os métodos do contexto
  const [espetinhos, setEspetinhos] = useState([] as EspetinhoData[]);

  useEffect(() => {
    setEspetinhos(listaEspetinho);
  }, [listaEspetinho]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Espetinhos</Text>
      <FlatList
        data={espetinhos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            <Text style={styles.amount}>Quantidade: {item.amount}</Text> 
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#ff6347', // Destaque em vermelho
  },
});
