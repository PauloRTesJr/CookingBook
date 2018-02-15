import React from "react";
import {View, Button} from "react-native";
import {Fumi} from "react-native-textinput-effects";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

const LoginComponent = () => {
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
            />
            <Fumi
                style={styles.input}
                label={'Password'}
                iconClass={Icon}
                iconName={'key'}
                iconColor={'#DB4264'}
                iconSize={20}
                secureTextEntry
            />
            <Button
                title="Login"
                color="#DB4264"
                onPress={() => {}}
            />
        </View>
    );
};

export default LoginComponent;
