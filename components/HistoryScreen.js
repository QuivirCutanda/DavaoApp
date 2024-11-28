import React from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import HistoryImage from "../assets/Images/oldCity.jpg";
import Footer from '../components/Footer';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>History of Davao</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.historyImage} source={HistoryImage} />
        </View>
        <Text style={styles.content}>
          Davao City, officially known as the City of Davao, has a rich history
          rooted in its indigenous communities, including the Bagobo, Mandaya,
          and Manobo tribes. The name "Davao" is derived from the Bagobo word
          "Daba-daba," which means fire. Spanish explorers first arrived in the
          area in the 1840s, and by the early 20th century, it became a hub for
          settlers and Japanese immigrants. Today, Davao is a vibrant city known
          for its cultural diversity and economic significance in the Philippines.
        </Text>
      <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center', 
    marginBottom: 16 
  },
  imageContainer: { 
    alignItems: 'center', 
    marginBottom: 20, 
    backgroundColor: '#e1e4e8', 
    padding: 10, 
    borderRadius: 8,
    margin:10
  },
  historyImage: { 
    width: '100%', 
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 8 
  },
  content: { 
    fontSize: 16, 
    lineHeight: 24, 
    textAlign: 'justify', 
    color: '#555',
    margin:10
  }
});

export default HistoryScreen;
