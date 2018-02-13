import { StackNavigator } from "react-navigation";
import LoginContainer from "./containers/login.container";

const RootStack = StackNavigator(
  {
      Login: {
          screen: LoginContainer
      },
  },
  {
    initialRouteName: "Login"
  }
);

export default RootStack;
