import React, { useContext } from 'react';
import {View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default props => {
    const { state, dispatch } = useContext(UsersContext)
    function confirmDel(user) {
        Alert.alert('Delete User','Can you confirm it ?', 
        [
            {
                text: "Yes",
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: "No"
            },
        ] )
    }
    function getUserItem({item: user}) {
        var z = (<ListItem
            key={user.id}
            bottomDivider
            onPress={() => props.navigation.navigate('UserForm')}
            >
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                type="clear"
                 onPress={() => props.navigation.navigate("UserForm", user)}
                 icon={<Icon name="edit" size={25} color="orange"  />} />
                <Button
                type="clear"
                 onPress={() => confirmDel(user)}
                 icon={<Icon name="delete" size={25} color="red"  />} />

                </ListItem>)
        return z
    }

    return (
       <View>
           <FlatList 
           data={state.users}
           renderItem={getUserItem} 
           keyExtractor={ user => user.id.toString()}>
           </FlatList>
       </View>
    )
}