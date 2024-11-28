import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const Footer = () => {
  const handlePress = () => {
    Linking.openURL('https://www.facebook.com/profile.php?id=100066808626014');
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Davao History App</Text>
      <Text style={styles.footerText}>All Rights Reserved</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.developerText}>Developed by John Kilven Jotojot</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#444',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 2,
  },
  developerText: {
    color: '#f5a623', // A color to make it stand out
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textDecorationLine: 'underline', // Adds an underline for better indication of a clickable link
  },
});

export default Footer;
