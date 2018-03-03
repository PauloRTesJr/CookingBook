import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {Fumi} from "react-native-textinput-effects";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getLogin} from "../../reducers/login-reducer";
import {submitLogin} from "../../actions/login/submit-login";
import {connect} from "react-redux";
import {colors} from "../../constants/colors";

class FormLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const {email, password} = this.state;
        const {isSubmitting} = this.props;

        return (
            <KeyboardAwareScrollView style={styles.loginContainer}>
                <Fumi
                    style={styles.input}
                    label={'Email'}
                    iconClass={Icon}
                    iconName={'envelope'}
                    iconColor={colors.primary}
                    iconSize={20}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => this.setState({email: text})}
                />
                <Fumi
                    style={styles.input}
                    label={'Password'}
                    iconClass={Icon}
                    iconName={'key'}
                    iconColor={colors.primary}
                    iconSize={20}
                    autoCapitalize="none"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => this.setState({password: text})}
                />

                <TouchableOpacity
                    style={[styles.buttonActions, styles.buttonLogin]}
                    activeOpacity={0.6}
                    onPress={() => this.props.submitLogin({email, password})}>
                    {isSubmitting ? <ActivityIndicator style={{width: 50, height: 50}}/> : null}
                    <Icon name="coffee" size={25} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonActions, styles.buttonFacebook]}
                    activeOpacity={0.6}
                    onPress={() => {
                    }}>
                    <Icon name="facebook" size={25} color="#FFFFFF"/>
                    <Text style={styles.buttonText}>Login with Facebook</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = (state: Object) => getLogin(state);

export default connect(
    mapStateToProps,
    {submitLogin}
)(FormLogin);