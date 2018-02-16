import React, {Component} from "react";

import LoginComponent from "../components/login/login.component";
import {StyleSheet, View} from "react-native";
import {colors} from "../constants";

class LoginContainer extends Component {
    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginComponent/>
            </View>
        );
    }
}

export default LoginContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center"
    }
});
