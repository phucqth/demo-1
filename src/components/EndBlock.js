import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const EndBlock = () => {
    return (
        <View style={styles.container}>
            <Text>EndBlock</Text>
        </View>
    );
};

export default EndBlock;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
});
