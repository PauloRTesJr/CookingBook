import React, {Component} from "react";

import LoginComponent from "../components/login/login.component";
import {StyleSheet, Text, View} from "react-native";

class LoginContainer extends Component {
	static navigationOptions = {header: null};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logoText}>Cooking Book</Text>
				<LoginComponent/>
			</View>
		);
	}
}

export default LoginContainer;

const styles =  StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#554468",
		alignItems: "center"
	},
	logoText: {
		textAlign: "center",
		fontSize: 40,
		marginBottom: 50,
        color: "#DB4264"
	}
});
