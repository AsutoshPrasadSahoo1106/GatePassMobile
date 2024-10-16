import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function WardenLogin({ navigation }) {
  const [credentials, setCredentials] = useState({ employeeId: '', password: '' });

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    const { employeeId, password } = credentials;

    // Basic validation
    if (!employeeId || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Here, you can add your login logic (e.g., API call)

    console.log('Login successful:', credentials);
    navigation.navigate('WardenDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Warden Login</Text>
      <TextInput
        placeholder="Employee ID"
        style={styles.input}
        value={credentials.employeeId}
        onChangeText={(text) => handleInputChange('employeeId', text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={credentials.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, marginBottom: 10 },
  loginButton: { backgroundColor: '#D32F2F', padding: 15, borderRadius: 5 },
  loginButtonText: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
