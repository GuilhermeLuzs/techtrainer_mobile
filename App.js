import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import logo from './assets/image.png';

import LoginScreen from './Log-In';
import EsqueciSenhaScreen from './Esqueci-Senha';
import HomeScreen from './Home';
import ProgramasScreen from './Programas';
import ProgramaScreen from './Programa';
import ProfileScreen from './Perfil';
import FichaDeTreinosScreen from './Treinos';
import ExerciciosScreen from './Exercicios';

// Custom Header Component
const Header = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

// Custom Drawer Content
const CustomDrawerContent = (props) => {
  const handleLogout = () => {
    props.navigation.replace('Auth');
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerMenuText}>☰</Text>
      </View>
      <DrawerItem
        label="Fulaninho"
        icon={() => <Icon name="user" size={20} color="#fff" />}
        onPress={() => props.navigation.navigate('Profile')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Home"
        icon={() => <Icon name="home" size={20} color="#fff" />}
        onPress={() => props.navigation.navigate('Home')}
        labelStyle={styles.drawerLabel}
      />
      <DrawerItem
        label="Ficha de Treino"
        icon={() => <Icon name="dumbbell" size={20} color="#fff" />}
        onPress={() => props.navigation.navigate('FichaDeTreinos')}
        labelStyle={styles.drawerLabel}
      />
      <View style={styles.spacer} />
      <DrawerItem
        label="Sair da Conta"
        icon={() => <Icon name="sign-out-alt" size={20} color="#fff" />}
        onPress={handleLogout}
        labelStyle={styles.drawerLabel}
      />
    </DrawerContentScrollView>
  );
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ header: (props) => <Header {...props} /> }} />
      <Stack.Screen name="Programas" component={ProgramasScreen} options={{ header: (props) => <Header {...props} /> }} />
      <Stack.Screen name="Programa" component={ProgramaScreen} options={{ header: (props) => <Header {...props} /> }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ header: (props) => <Header {...props} /> }} />
      <Stack.Screen name="FichaDeTreinos" component={FichaDeTreinosScreen} options={{ header: (props) => <Header {...props} /> }} />
      <Stack.Screen name="Exercicios" component={ExerciciosScreen} options={{ header: (props) => <Header {...props} /> }} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#211F28',
        },
      }}
    >
      <Drawer.Screen name="HomeStack" component={MainStackNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Esqueci-Senha"
        component={EsqueciSenhaScreen}
        options={{
          title: 'Recuperar Senha',
          headerStyle: {
            backgroundColor: '#211F28',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Auth" component={AuthStackNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: '#19181D',
  },
  header: {
    height: 90,
    backgroundColor: '#19181D',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#00DB4F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuButton: {
    position: 'absolute',
    left: 10,
  },
  menuText: {
    fontSize: 30,
    color: '#fff',
  },
  logo: {
    width: '29%',
    height: '85%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#211F28',
  },
  drawerHeader: {
    padding: 20,
    alignItems: 'flex-start',
  },
  drawerMenuText: {
    fontSize: 30,
    color: '#fff',
  },
  drawerLabel: {
    color: '#fff',
    fontSize: 18,
  },
  spacer: {
    flex: 1,
  },
});

export default App;
