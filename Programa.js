import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const ProgramaScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Icon name="arrowleft" size={25} color="#FFA800" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>PROGRAMAS EXTRAS</Text>
        <View style={styles.line}></View>
        <Text style={styles.subtitle}>FIT DANCE</Text>
        <Image source={require('./assets/fit_dance_image.png')} style={styles.image} />
        <View style={styles.card}>
          <View style={styles.cardInner}>
            <View style={styles.cardInside}>
              <View style={styles.cardInsideSquare}>
                <Text style={styles.cardText}>
                  É uma aula de Fit Dance cheia de energia, combinando movimentos de dança e exercícios aeróbicos ao som de músicas populares. O objetivo é se movimentar, se divertir e queimar calorias. Os instrutores experientes guiarão através de coreografias dinâmicas e fáceis de seguir, para que todos possam aproveitar ao máximo a aula. Venha participar de uma hora de ritmo, suor e alegria!
                </Text>
              </View>
            </View>
            <View style={styles.square}>
              <Text style={styles.squareTitle}>DIAS E HORÁRIOS</Text>
              <Text style={styles.squareText}>• Segundas, das 15:00 às 16:20</Text>
              <Text style={styles.squareText}>• Quartas, das 07:00 às 08:20</Text>
            </View>
            <View style={styles.square}>
              <Text style={styles.squareTitle}>TREINADORES</Text>
              <Text style={styles.squareText}>• Treinador tal</Text>
              <Text style={styles.squareText}>• Treinadora tal</Text>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19181D',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#19181D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  backText: {
    color: '#FFA800',
    marginLeft: 5,
    fontSize: 18,
  },
  title: {
    color: '#FFA800',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '900',
  },
  line: {
    borderBottomColor: '#FFA800',
    borderBottomWidth: 3,
    width: '80%',
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 45,
    marginTop: -15,
  },
  image: {
    width: '80%',
    height: 350,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#FFA800',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#211F28',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    height: '50%'
  },
  cardInner: {
    marginBottom: 20,
  },
  cardText: {
    color: 'white',
    fontSize: 19,
  },
  square: {
    borderWidth: 2,
    borderColor: '#3C3948',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  squareTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  squareText: {
    color: 'white',
    fontSize: 19,
  },
  cardInside: {
    marginTop: 20,
  },
  cardInsideSquare: {
    borderWidth: 2,
    borderColor: '#3C3948',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#211F28',
  },
  cardInsideTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardInsideText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ProgramaScreen;
