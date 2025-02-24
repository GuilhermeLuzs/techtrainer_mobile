import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
          <Text style={{ color: '#FFA800' }}>TRANSFORME</Text> SEU TREINO, <Text style={{ color: '#FFA800' }}>OTIMIZE</Text> SEUS <Text style={{ color: '#FFA800' }}>RESULTADOS</Text>
        </Text>
        <Text style={[styles.titleText, { marginBottom: 30, fontWeight: 'bold' }]}>CONHEÇA NOSSOS PROGRAMAS</Text>

        <View style={styles.card}>
          <ImageBackground source={require('./assets/photo.png')} style={styles.cardBackground}>
            <View style={styles.cardContent}>
              <Text style={[styles.cardText, { marginTop: 30 }]}>CROSSFIT</Text>
              <View style={styles.icons}>
                <View style={styles.iconContainer}>
                  <Icon name="calendar" size={25} color="white" style={[styles.icon, styles.calendar]} />
                  <TouchableOpacity>
                    <Text style={styles.iconText}>Datas</Text>
                    <Text style={styles.iconText}>Segunda</Text>
                    <Text style={styles.iconText}>Quarta</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                  <Icon name="clock-o" size={25} color="white" style={styles.icon} />
                  <TouchableOpacity>
                    <Text style={styles.iconText}>Horários</Text>
                    <Text style={styles.iconText}>15:00 - 16:20</Text>
                    <Text style={styles.iconText}>07:00 - 08:20</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={[styles.cardDescription, { marginTop: 30 }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Programa')}>
              <Text style={styles.buttonSaibaMais}>Saiba Mais</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <TouchableOpacity 
          style={styles.buttonAll}
          onPress={() => navigation.navigate('Programas')}>
          <Text style={styles.buttonText}>CONHECER TODOS</Text>
        </TouchableOpacity>

        <View style={{ height: 300 }} />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19181D',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  headerText: {
    color: 'white',
    fontSize: 34,
    textAlign: 'center',
    paddingHorizontal: 25,
    marginBottom: 15,
    marginTop: 60,
    fontWeight: '900',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    marginTop: 40,
    marginBottom: -80,
  },
  card: {
    marginTop: 20,
    width: '70%',
    height: 420, 
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#FFA800',
  },
  cardBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 20,
  },
  cardText: {
    color: '#432C00',
    fontWeight: '900',
    fontSize: 30, 
    marginBottom: 30,
    marginTop: 20,
    backgroundColor: '#FFA800',
    width: '140%',
    height: '25%',
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center', 
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: -60,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginRight: 20,
  },
  icon: {
    marginRight: 5,
  },
  iconText: {
    color: 'white',
    marginLeft: 5,
    textAlign: 'center',
    marginTop: 5,
  },
  calendar: {
    marginLeft: 8,
  },
  cardDescription: {
    color: 'white',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    fontSize: 12,
  },
  button: {
    backgroundColor: '#FFA800',
    padding: 8, 
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 50,
    width: 150,
    alignSelf: 'center',
  },
  buttonAll: {
    marginTop: 20,
    borderWidth: 3,
    width: 270,
    height: 50,
    borderColor: '#FFA800',
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFA800',
    textAlign: 'center',
    fontWeight: '900',
  },
  buttonSaibaMais:{
    color: '#432C00',
    textAlign: 'center',
    fontSize: 16, 
    fontWeight: '900',
  }
});

export default HomeScreen;
