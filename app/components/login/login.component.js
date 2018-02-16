import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {Fumi} from "react-native-textinput-effects";
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";
import {connect} from "react-redux";
import {submitLogin} from "../../actions/login/submit-login";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const {email, password} = this.state;

        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Text style={styles.logoText}>Cooking Book</Text>
                    </View>
                    <Fumi
                        style={styles.input}
                        label={'Email'}
                        iconClass={Icon}
                        iconName={'envelope'}
                        iconColor={'#DB4264'}
                        iconSize={20}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text) => this.setState({ email: text })}
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
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                    <TouchableOpacity
                        style={[styles.buttonActions, styles.buttonLogin]}
                        activeOpacity={0.6}
                        onPress={() => this.props.submitLogin(email, password)}>
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
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {}}>
                    <Text>Crie sua conta aqui</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitLogin: (email, password) => dispatch(submitLogin({email, password}))
});

export default connect(
    null,
    mapDispatchToProps
)(LoginComponent);
