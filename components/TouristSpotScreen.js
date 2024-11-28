import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Footer from '../components/Footer';

const TouristSpotsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tourist Spots in Davao</Text>

      <View style={styles.spotContainer}>
        <Image 
          source={require('../assets/Images/mountApo.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.spotTitle}>Mount Apo</Text>
        <Text style={styles.content}>
          Mount Apo is the highest peak in the Philippines, standing at 2,954 meters above sea level. Known as the "Grandfather of Philippine Mountains," it is a bucket-list destination for adventurers and trekkers. The mountain is home to diverse flora and fauna, including the endangered Philippine eagle. Trekkers can enjoy scenic trails, lush forests, and breathtaking views of Davao's landscapes.
        </Text>
      </View>

      <View style={styles.spotContainer}>
        <Image 
          source={require('../assets/Images/crocodilePark.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.spotTitle}>Davao Crocodile Park</Text>
        <Text style={styles.content}>
          Davao Crocodile Park offers visitors a unique experience of interacting with exotic animals. This wildlife park is a sanctuary for crocodiles, including the giant saltwater crocodile. It also features other animals such as tigers, birds, and reptiles. The park promotes conservation awareness and provides an educational and thrilling adventure for all ages.
        </Text>
      </View>

      <View style={styles.spotContainer}>
        <Image 
          source={require('../assets/Images/edenPark.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.spotTitle}>Eden Nature Park</Text>
        <Text style={styles.content}>
          Eden Nature Park is a serene getaway from the city's hustle and bustle. Nestled on the slopes of Mount Talomo, it boasts manicured gardens, hiking trails, and zipline adventures. Visitors can enjoy the cool mountain air while exploring the park's rich vegetation, native plants, and picturesque views. It’s perfect for picnics, camping, and reconnecting with nature.
        </Text>
      </View>

      <View style={styles.spotContainer}>
        <Image 
          source={require('../assets/Images/samalIsland.jpg')} 
          style={styles.image} 
        />
        <Text style={styles.spotTitle}>Samal Island</Text>
        <Text style={styles.content}>
          Samal Island, officially known as the Island Garden City of Samal, is a tropical paradise renowned for its white sand beaches and azure waters. Just a short boat ride from Davao City, it offers excellent snorkeling, diving, and island-hopping opportunities. Must-visit spots include Pearl Farm Beach Resort, Hagimit Falls, and the Monfort Bat Sanctuary.
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
  spotContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    margin:10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  spotTitle: {
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

export default TouristSpotsScreen;
