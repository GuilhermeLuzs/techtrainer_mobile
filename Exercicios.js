import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Exercicio = () => {
  const navigation = useNavigation();

  const handleNavigateToTreinos = () => {
    navigation.navigate('FichaDeTreinos');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateToTreinos} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="#FFA800" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>ABDOMINAL CANIVETE</Text>
        <View style={styles.line}></View>
      </View>

      {/* Video */}
      {/* Replace this with your video component */}

      <View style={styles.card}>
        <Text style={styles.description}>Exercício para fortalecimento e hipertrofia da região abdominal, reto abdominal, oblíquos internos e externos. Indicado a praticante de musculação nível iniciante e intermediário. Estimula o equilíbrio, coordenação, força muscular e capacidade funcional.</Text>
      </View>

      {/* Information */}
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoTitle}>TIPO:</Text>
            <Text style={styles.infoValue}>Funcional</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoTitle}>GRUPO:</Text>
            <Text style={styles.infoValue}>Abdome</Text>
          </View>
        </View>

        {/* Musculos Trabalhados */}
        <Text style={styles.infoTitle}>MUSCULOS TRABALHADOS:</Text>
        <Text style={styles.infoList}>• Oblíquo Externo</Text>
        <Text style={styles.infoList}>• Oblíquo Interno</Text>
        <Text style={styles.infoList}>• Reto do Abdome</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211F28',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#FFA800',
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#FFA800',
    fontSize: 26,
    fontWeight: 'bold',
  },
  line: {
    width: 230,
    height: 2,
    backgroundColor: '#FFA800',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#3C3948',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoTitle: {
    color: '#FFA800',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoValue: {
    color: 'white',
    marginTop: 5,
  },
  infoList: {
    color: 'white',
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default Exercicio;
