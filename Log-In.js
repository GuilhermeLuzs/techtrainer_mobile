// Log-In.js
import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert(
                'Erro de Login',
                'Senha ou Email incorretos.\nPor favor insira Senha e Email válidos.'
            );
        } else {
            navigation.replace('Main'); 
        }
    };

    const handleForgotPassword = () => {
        navigation.navigate('Esqueci-Senha');
    };

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.container}>
                <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
                    <Image source={require('./assets/logo.png')} style={styles.logo} />
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>ENTRAR</Text>
                        <View style={styles.form}>
                            <Text style={styles.miniTitle}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.miniTitle}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text style={styles.forgotPassword}>Esqueceu sua Senha?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                                <Text style={styles.buttonText}>ENTRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: '#211F28',
        width: '75%', 
        height: '42%', 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 150,
        borderRadius: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
    },
    miniTitle: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
        marginTop: -3
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 25,
        alignSelf: 'center',
    },
    form: {
        width: '80%',
    },
    input: {
        backgroundColor: '#3C3948',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        height: 40,
        color: '#9A97A6', 
    },
    button: {
        borderWidth: 3, 
        borderColor: '#FFA800', 
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20, 
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFA800', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#9A97A6',
        fontSize: 14,
        marginBottom: 15,
        textDecorationLine: 'underline',
        alignSelf: 'center',
        marginTop: -5,
    },
});

export default LoginScreen;
