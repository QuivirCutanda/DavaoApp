import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Footer from '../components/Footer';

const GeographyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Geography of Davao</Text>

      <View style={styles.section}>
        <Image 
          source={require('../assets/Images/davaoMap.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Location and Size</Text>
        <Text style={styles.content}>
          Davao City is located in the southeastern part of Mindanao, bordered by the Davao Gulf to the south. The city spans an area of 2,444 square kilometers, making it one of the largest cities in the world in terms of land area. Its strategic location provides access to natural resources and a thriving port along the gulf.
        </Text>
      </View>

      <View style={styles.section}>
        <Image 
          source={require('../assets/Images/davaoLandscape.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Diverse Landscapes</Text>
        <Text style={styles.content}>
          Davao boasts diverse geographical features, including pristine beaches, rolling mountains, and fertile plains. Mount Apo, the highest peak in the Philippines, is a dominant feature of its landscape, attracting trekkers and nature lovers. The city is also home to vast forests and agricultural lands that contribute to its economy.
        </Text>
      </View>

      <View style={styles.section}>
        <Image 
          source={require('../assets/Images/davaoGulf.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Davao Gulf</Text>
        <Text style={styles.content}>
          The Davao Gulf is an essential feature of the city, providing a rich marine ecosystem and supporting local fishing communities. Its crystal-clear waters and coral reefs are a haven for marine biodiversity, making it a popular destination for diving and snorkeling.
        </Text>
      </View>

      <View style={styles.section}>
        <Image 
          source={require('../assets/Images/davaoClimate.png')} 
          style={styles.image} 
        />
        <Text style={styles.subtitle}>Climate and Vegetation</Text>
        <Text style={styles.content}>
          Davao City experiences a tropical climate, characterized by abundant rainfall and consistent temperatures throughout the year. This climate supports lush vegetation, making the region ideal for growing fruits like durian, pomelo, and bananas. The city's greenery adds to its charm and contributes to its reputation as a nature-friendly destination.
        </Text>
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default GeographyScreen;
