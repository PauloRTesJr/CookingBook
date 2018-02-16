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
				<View style={styles.logo}>
					<Text style={styles.logoText}>Cooking Book</Text>
				</View>
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
		backgroundColor: "#554468",
		alignItems: "center"
	},
	logo: {
        backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		marginTop: 80,
		marginBottom: 80,
        borderColor: "#DB4264",
        borderWidth: 3
	},
	logoText: {
		textAlign: "center",
		fontSize: 40,
		color: "#DB4264",
        fontWeight: "800"
	}
});
