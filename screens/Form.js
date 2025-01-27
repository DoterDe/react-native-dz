import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    const formData = { name, phone, email };
    setSubmittedData(formData);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Страница Регистрации</Text>
          
          <Image
            style={styles.logo}
            source={require('./Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Logo_Brandmark.png')}  
          />

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Введите ваше имя"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Введите ваш телефон"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Введите ваш email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Button title="Отправить" onPress={handleSubmit} />
          </View>

          {submittedData && (
            <View style={styles.submittedData}>
              <Text style={styles.submittedText}>Данные пользователя:</Text>
              <Text style={styles.submittedText}>Имя: {submittedData.name}</Text>
              <Text style={styles.submittedText}>Телефон: {submittedData.phone}</Text>
              <Text style={styles.submittedText}>Email: {submittedData.email}</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  submittedData: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e1f7d5',
    borderRadius: 8,
    width: '100%',
  },
  submittedText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;
