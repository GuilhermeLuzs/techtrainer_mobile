// Esqueci-Senha.js
import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, Image, ScrollView, Alert } from 'react-native';

const EsqueciSenhaScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const handleFinalizar = () => {
        if (!email.trim() || !novaSenha.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
        } else {
            Alert.alert(
                'Nova Senha válida!',
                'Realize o Log-In',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('Login')
                    }
                ]
            );
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
                    <Image source={require('./assets/logo.png')} style={styles.logo} />
                    <View style={styles.formContainer}>
                        <Text style={styles.title}>RECUPERAR SENHA</Text>
                        <View style={styles.form}>
                            <Text style={styles.miniTitle}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Text style={styles.textBelowInput}>Um pedido de confirmação será enviado para o email informado.</Text>
                            <Text style={styles.miniTitle}>Nova Senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nova Senha"
                                secureTextEntry={true}
                                value={novaSenha}
                                onChangeText={(text) => setNovaSenha(text)}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
                                <Text style={styles.buttonText}>Finalizar</Text>
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
        height: '45%',
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
        marginTop: -3,
    },
    textBelowInput: {
        color: '#9A97A6',
        fontSize: 12,
        marginBottom: 10,
        marginTop: -5,
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
});

export default EsqueciSenhaScreen;
