import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        width: 300
    },
    input: {
        height: 70,
        marginBottom: 5
    },
    buttonActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding:7,
        borderColor: "#FFF",
        borderWidth: 3
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "800",
        color: "#FFFFFF",
        marginLeft: 10
    },
    buttonLogin: {
        backgroundColor: '#DB4264'
    },
    buttonFacebook: {
        backgroundColor: '#3b5998'
    }
});
