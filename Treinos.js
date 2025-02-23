import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Exercise = ({ title }) => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.exercise}>
      <Text style={[styles.exerciseTitle, { color: '#FFA800' }]}>{title}</Text>
      <View style={styles.descriptionRow}>
        <Text style={styles.textdescription}>Séries: 0</Text>
        <Text style={styles.textdescription}>Repetições: 0</Text>
      </View>
      <View style={styles.descriptionRow}>
        <Text style={styles.textdescription}>Carga: 0</Text>
        <Text style={styles.textdescription}>Descanso: 0</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Exercicios')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const FichaDeTreinosScreen = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const enabledSections = ['A', 'B', 'C'];
  const allSections = ['A', 'B', 'C', 'D', 'E', 'F'];
  const navigation = useNavigation(); 

  const toggleSection = (section) => {
    if (enabledSections.includes(section)) {
      setExpandedSection(section === expandedSection ? null : section);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* User Card */}
      <View style={styles.card}>
        {/* User Image and Name */}
        <Image source={require('./assets/user_image.png')} style={styles.userImage} />
        <Text style={styles.userName}>Fulaninho de Sei la oq</Text>
      </View>

      {/* Exercise Sections */}
      {allSections.map((section, index) => (
        <View key={index} style={styles.sectionContainer}>
          <TouchableOpacity
            onPress={() => toggleSection(section)}
            style={[
              styles.section,
              expandedSection === section && styles.expandedSection,
              !enabledSections.includes(section) && styles.disabledSection,
            ]}
          >
            <FontAwesome5
              name={expandedSection === section ? 'chevron-down' : 'chevron-right'}
              size={18}
              color="white"
              style={styles.sectionIcon}
            />
            <Text style={[styles.sectionTitle, !enabledSections.includes(section) && styles.disabledSectionTitle]}>
              {section}
            </Text>
          </TouchableOpacity>
          {expandedSection === section && (
            <View style={styles.exerciseContent}>
              <Exercise title="ABDOMINAL CANIVETE" />
              <View style={styles.line} />
              <Exercise title="EXERCICIO B" />
              <View style={styles.line} />
              <Exercise title="EXERCICIO C" />
              <View style={styles.line} />
              <Exercise title="EXERCICIO D" />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#19181D',
    padding: 20,
  },
  card: {
    backgroundColor: '#211F28',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#211F28',
    borderRadius: 10,
    padding: 10,
  },
  sectionIcon: {
    marginRight: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    flex: 1,
  },
  disabledSection: {
    backgroundColor: '#211F28',
  },
  disabledSectionTitle: {
    color: '#3C3948',
  },
  expandedSection: {
    backgroundColor: '#FFA800',
  },
  exerciseContent: {
    backgroundColor: '#3C3948',
    borderRadius: 10,
    marginBottom: 20,
  },
  exercise: {
    padding: 10,
  },
  exerciseTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  descriptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#FFA800',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    width: '50%',
    height: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 7,
  },
  line: {
    height: 1,
    width: '70%',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  textdescription: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 25,
    marginBottom: 20,
    marginTop: 10,
  }
});

export default FichaDeTreinosScreen;
