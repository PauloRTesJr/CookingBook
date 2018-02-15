import React, {Component} from "react";

import LoginComponent from "../components/login/login.component";
import {StyleSheet, Text, View} from "react-native";
import {getLogin} from "../reducers/login-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state: Object) => getLogin(state);

class LoginContainer extends Component {
	static navigationOptions = {header: null};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.logoText}>Cooking Book</Text>
				<LoginComponent
                    email={this.props.email}
                    password={this.props.password}/>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(LoginContainer);

const styles = StyleSheet.create({
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
