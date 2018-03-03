import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

import styles from "./styles";
import FormLogin from "./form-login";

export default class LoginComponent extends React.Component {

    render() {
        const resizeMode = 'cover';
        return (
            <View style={styles.screen}>
                <Image style={{
                    backgroundColor: '#ccc',
                    flex: 1,
                    resizeMode,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignSelf: 'stretch'
                }} source={require('../../assets/images/login_background.jpg')}/>
                <View style={styles.logo}>
                    <Text style={styles.logoText}>Cooking Book</Text>
                </View>
                <FormLogin/>
                <TouchableOpacity
                    style={styles.createAccount}
                    activeOpacity={0.6}
                    onPress={() => {
                    }}>
                    <Text style={styles.createAccountText}>Create your account here!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
