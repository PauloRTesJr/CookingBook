import React from "react";
import firebase from "firebase";
import {Provider} from 'react-redux';

import RootStack from "./app/routes";
import configureStore from './app/store/configureStore';

const store = configureStore({});

export default class App extends React.Component {
    constructor(props) {
        super(props);

        let config = {
            apiKey: "AIzaSyBjF-MyT_b-QFCzlrYk3j7tPNyKKoXFvW0",
            authDomain: "cookingbook-cbf12.firebaseapp.com",
            databaseURL: "https://cookingbook-cbf12.firebaseio.com",
            projectId: "cookingbook-cbf12",
            storageBucket: "cookingbook-cbf12.appspot.com",
            messagingSenderId: "494665447235"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (<Provider store={store}><RootStack/></Provider>);
    }
}
