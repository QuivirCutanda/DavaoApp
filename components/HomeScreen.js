import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Davao Guide</Text>
      <Image 
        source={require('../assets/Images/davaoWelcome.jpg')} 
        style={styles.heroImage} 
      />
      <Text style={styles.description}>
        Explore the rich history, breathtaking tourist spots, and diverse geography of Davao. Use the menu to navigate through the app.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('History')}
        >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tourist Spots')}
        >
          <Text style={styles.buttonText}>Tourist Spots</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Geography')}
        >
          <Text style={styles.buttonText}>Geography</Text>
        </TouchableOpacity>
      </View>

      {/* Footer container to make the footer full width */}
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d3748',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  heroImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  description: {
    fontSize: 18,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 30,
    fontFamily: 'Arial',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3182ce',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  footerContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default HomeScreen;
