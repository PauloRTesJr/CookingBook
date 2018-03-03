import {StyleSheet} from "react-native";

import {colors} from "../../constants";

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        backgroundColor: "rgba(255,255,255,0.4)",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 70,
        marginBottom: 30,
        borderColor: colors.primary,
        borderWidth: 3,
        borderRadius: 10
    },
    logoText: {
        textAlign: "center",
        fontSize: 40,
        color: colors.primary,
        fontWeight: "800"
    },
    loginContainer: {
        width: 300
    },
    input: {
        height: 60,
        marginBottom: 10
    },
    buttonActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        padding: 7,
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
        backgroundColor: colors.secondaryTransparency
    },
    buttonFacebook: {
        backgroundColor: colors.facebook
    },
    createAccount: {
        alignSelf: "stretch",
        backgroundColor: "rgba(255,255,255,0.3)",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderTopWidth: 3
    },
    createAccountText: {
        fontWeight: "800"
    }
});
