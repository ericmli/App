import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';
import { ButtonCostumized } from './Buttons';

export default function Login() {

    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)

    const confirm = () =>{
        console.log(user, password)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Image source={require('../assets/icon.png')} style={styles.icon} />
            <Input
                style={styles.input}
                placeholder='Usuário'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={user => setUser(user)}
                keyboardType='email-address'
            />

            <Input
                style={styles.input}
                placeholder='Senha'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
            />

            <Button buttonStyle={{ width: '100%', backgroundColor: '#F58CAD', borderRadius: '5', marginTop: 10}} title="Entrar" onPress={() => confirm()}/>

            <ButtonCostumized title="Quero criar uma conta"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        padding: 10,
    },
    icon: {
        width: 200,
        height: 200,
    },
    input: {
        height: 40,
        margin: 0
      },

});
