import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ProgramasScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: '1',
      title: 'FIT DANCE',
      image: require('./assets/fit_dance.png'),
      days: ['Segunda', 'Quarta'],
      hours: ['15:00 - 16:20', '07:00 - 08:20'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
    },
    {
        id: '2',
        title: 'BIKE INDOOR',
        image: require('./assets/bike_indoor.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '3',
        title: 'POWER JUMP',
        image: require('./assets/power_jump.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '4',
        title: 'YOGA',
        image: require('./assets/yoga.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '5',
        title: 'BODY COMBAT',
        image: require('./assets/body_combat.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '6',
        title: 'ZUMBA',
        image: require('./assets/zumba.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '7',
        title: 'CROSSFIT',
        image: require('./assets/photo.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '8',
        title: 'BOXE',
        image: require('./assets/boxe.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
      {
        id: '9',
        title: 'GINÁSTICA',
        image: require('./assets/ginastica.png'),
        days: ['Segunda', 'Quarta'],
        hours: ['15:00 - 16:20', '07:00 - 08:20'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt congue risus, id mollis est fringilla a. Integer bibendum dictum neque.',
      },
  ];


  const handleSaibaMais = () => {
    navigation.navigate('Programa');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <ImageBackground source={item.image} style={styles.cardBackground}>
        <View style={styles.cardContent}>
          <Text style={[styles.cardText, { marginTop: 30 }]}>{item.title}</Text>
          <View style={styles.icons}>
            <View style={styles.iconContainer}>
              <Icon name="calendar" size={25} color="white" style={[styles.icon, styles.calendar]} />
              {item.days.map((day, index) => (
                <Text key={index} style={styles.iconText}>{day}</Text>
              ))}
            </View>
            <View style={styles.iconContainer}>
              <Icon name="clock-o" size={25} color="white" style={styles.icon} />
              {item.hours.map((hour, index) => (
                <Text key={index} style={styles.iconText}>{hour}</Text>
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSaibaMais}>
          <Text style={styles.buttonSaibaMais}>Saiba Mais</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROGRAMAS EXTRAS</Text>
      
      <View style={styles.line}></View>
      <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cardContainer}
        numColumns={1}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19181D',
    alignItems: 'center',
    justifyContent: 'center',
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
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
    marginBottom:60,
    marginTop: 20,
    backgroundColor: '#FFA800',
    width: '200%',
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
    marginTop: 40,
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
  buttonSaibaMais: {
    color: '#432C00',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  }
});
export default ProgramasScreen;
