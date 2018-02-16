import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {Fumi} from "react-native-textinput-effects";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

type Props = {
    email: string,
    password: string
}

const LoginComponent = (props: Props) => {
    const {
        email,
        password
    } = props;

    return (
        <View style={styles.container}>
            <Fumi
                style={styles.input}
                label={'Email'}
                iconClass={Icon}
                iconName={'envelope'}
                iconColor={'#DB4264'}
                iconSize={20}
                keyboardType="email-address"
                value={email}
            />
            <Fumi
                style={styles.input}
                label={'Password'}
                iconClass={Icon}
                iconName={'key'}
                iconColor={'#DB4264'}
                iconSize={20}
                secureTextEntry
                value={password}
            />
            <TouchableOpacity
                style={[styles.buttonActions, styles.buttonLogin]}
                activeOpacity={0.6}
                onPress={() => {}}>
                <Icon name="coffee" size={25} color="#FFFFFF" />
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonActions, styles.buttonFacebook]}
                activeOpacity={0.6}
                onPress={() => {}}>
                <Icon name="facebook" size={25} color="#FFFFFF" />
                <Text style={styles.buttonText}>Login with Facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginComponent;
