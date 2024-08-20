import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

/**
 * A reusable full-width button component.
 *
 * @param {function} handlePress - a callback function to handle button press
 * @param {string} text - the text to display on the button
 * @return {JSX.Element} a Pressable component with a Text child
 */
const FullButton = ({ handlePress, text }) => {
    return (
        <Pressable onPress={handlePress} style={styles.loginBtn}>
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    );
};

export default FullButton;

const styles = StyleSheet.create({
    loginBtn: {
        width: '100%',
        height: 56,
        padding: 12,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
    },
});
