import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { colors } from '../styles/colors';

const CartScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartText}>{item.name}</Text>
      <Text style={styles.cartText}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Keranjang Belanja</Text>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.emptyText}>Keranjang Anda kosong.</Text>
      )}
      <Button
        title="Kembali ke Galeri"
        onPress={() => navigation.goBack()}
        color={colors.pinkSoft}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blueSoft,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  cartText: {
    color: colors.blueSoft,
    fontSize: 16,
  },
  emptyText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;
