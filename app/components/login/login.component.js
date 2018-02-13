import React from 'react';
import {
    View,
    Button
} from 'react-native';
import styles from './styles';

type Props = {
    email: string,
    password: string
}

const LoginComponent = (props: Props) => {
    const {
        
    } = props;

    return (
        <View style={styles.container}>
            <Button
                title='Load Data'
            />
        </View>
    );
};

export default LoginComponent;
