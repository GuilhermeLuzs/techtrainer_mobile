import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardUser}>
          <Image source={require('./assets/user_image.png')} style={styles.image} />
          <Text style={styles.name}>Fulaninho de Sei la oq</Text>
        </View>
        <View style={styles.cardDados}>
          <Text style={styles.cardTitle}>DADOS PESSOAIS</Text>
          <Text style={styles.info}><Text style={styles.bold}>Telefone:</Text> (12) 9999-999999</Text>
          <Text style={styles.info}><Text style={styles.bold}>Email:</Text> fulano@gmai.com</Text>
          <Text style={styles.info}><Text style={styles.bold}>Data de Nascimento:</Text> 00/00/0000</Text>
          <Text style={styles.info}><Text style={styles.bold}>Endereço:</Text> Rua Lorem</Text>
          <Text style={styles.info}><Text style={styles.bold}>RG:</Text> 00.000.000-0</Text>
          <Text style={styles.info}><Text style={styles.bold}>CPF:</Text> 000.000.000-00</Text>
        </View>
        <View style={[styles.card, styles.fichaCard]}>
          <Text style={styles.cardTitleFicha}>DADOS DE FICHA</Text>
          <Text style={styles.info}><Text style={styles.bold}>Nome:</Text> Nome do Treino</Text>
          <Text style={styles.info}><Text style={styles.bold}>Objetivo:</Text> Definição</Text>
          <Text style={styles.info}><Text style={styles.bold}>Treinos:</Text> A B C</Text>
          <Text style={styles.info}><Text style={styles.bold}>Sessões:</Text> 00</Text>
          <Text style={styles.info}><Text style={styles.bold}>Inicio:</Text> 00/00/0000</Text>
          <Text style={styles.info}><Text style={styles.bold}>Validade:</Text> 00/00/0000</Text>
          <View style={styles.haltereContainer}>
            <Image source={require('./assets/haltere.png')} style={styles.haltereIcon} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181D',
    padding: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#211F28',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardUser: {
    backgroundColor: '#211F28',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    marginTop: 50,
  },
  cardDados: {
    backgroundColor: '#19181D',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    borderWidth: 3,  
    borderColor: '#3C3948', 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: 30,
  },
  cardTitleFicha: {
    color: '#FFA800',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: 30,
  },
  info: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  fichaCard: {
    backgroundColor: '#19181D',
    borderColor: '#FFA800',
    borderWidth: 3,
    position: 'relative',
    width: '90%',
    marginBottom: 100,
  },
  haltereContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  haltereIcon: {
    width: 50,
    height: 50,
  },
});

export default ProfileScreen;
