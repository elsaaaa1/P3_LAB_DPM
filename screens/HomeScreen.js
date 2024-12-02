import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button, Alert } from 'react-native';
import { colors } from '../styles/colors';
import ItemCard from '../components/ItemCard';

const HomeScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Simulasi fetch data
    const fetchItems = async () => {
      const data = [
        { 
          id: '1', 
          name: 'Boneka Panda', 
          description: 'Boneka panda yang comeii nyaman dipeluk.', 
          image: require('../assets/images/item1.jpg') 
        },
        { 
          id: '2', 
          name: 'Kaktus Imut', 
          description: 'Kaktus mini yang menggemaskan dan cocok untuk hiasan meja para coquete.', 
          image: require('../assets/images/item2.jpg') 
        },
        { 
          id: '3', 
          name: 'Mug Kucing', 
          description: 'Mug unik dengan desain wajah kucing yang super lucu.', 
          image: require('../assets/images/item3.jpg') 
        },
        {
          id: '4', 
          name: 'Gelang Cantik', 
          description: 'Gelang cantik untuk cewe cantik.',

          image: require('../assets/images/item4.jpg')
        }
      ];
      setItems(data);
    };

    fetchItems();
  }, []);

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert("Item Ditambahkan", `${item.name} telah ditambahkan ke keranjang.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Barang Lucu Ellsya🐣🥰</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <ItemCard item={item} />
            <Button
              title="Tambah ke Keranjang"
              onPress={() => addToCart(item)}
              color={colors.pinkSoft}
            />
          </View>
        )}
        contentContainerStyle={styles.list}
      />
      <Button
        title="Lihat Keranjang"
        onPress={() => navigation.navigate('Cart', { cartItems: cart })}
        color={colors.blueSoft}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueSoft,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
});

export default HomeScreen;
