import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UserContext'
export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => (setUser({ ...user, name }))}
                placeholder="Tell us the name nome"
                value={user.name}
            />
            <Text>E-Mail</Text>
            <TextInput
                style={style.input}
                onChangeText={email => (setUser({ ...user, email }))}
                placeholder="Tell us the e-mail"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => (setUser({ ...user, avatarUrl }))}
                placeholder="Tell us the URL of the Avatar"
                value={user.avatarUrl}
            />
            <Button title="Save" onPress={() => {
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user
                })
                navigation.goBack();
            }} />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
})