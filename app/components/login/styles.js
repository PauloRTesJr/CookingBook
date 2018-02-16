import {StyleSheet} from "react-native";

import {colors} from "../../constants";

export default StyleSheet.create({
    container: {
        width: 300
    },
    logo: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginTop: 80,
        marginBottom: 80,
        borderColor: colors.secondary,
        borderWidth: 3
    },
    logoText: {
        textAlign: "center",
        fontSize: 40,
        color: colors.secondary,
        fontWeight: "800"
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
        backgroundColor: colors.secondary
    },
    buttonFacebook: {
        backgroundColor: colors.facebook
    }
});
