import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

const ItemCard = ({ item }) => {
  const [liked, setLiked] = useState(false); // State untuk menyimpan status suka

  const handleLikePress = () => {
    setLiked(!liked); // Toggle status suka
  };

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text> {/* Menampilkan deskripsi */}
      <TouchableOpacity onPress={handleLikePress} style={[styles.likeButton, liked && styles.liked]}>
        <Text style={styles.likeText}>{liked ? '💖 Disukai' : '🤍 Suka'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 15,
    textAlign: 'center', // Agar deskripsi rata tengah
    paddingHorizontal: 10, // Memberi jarak
  },
  likeButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.pinkSoft,
    backgroundColor: colors.white,
  },
  liked: {
    backgroundColor: colors.pinkSoft,
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.pinkSoft,
  },
});

export default ItemCard;
