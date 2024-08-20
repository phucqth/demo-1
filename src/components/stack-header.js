import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const StackHeader = ({ title, subtitle }) => {
    return (
        <View style={styles.headerContainer}>
            <Link replace href={{ pathname: 'settings' }}>
                <Ionicons name='chevron-back-sharp' size={30} color='black' />
            </Link>
            <View>
                <Text style={styles.headerTitle}>{title}</Text>
                <Text style={styles.subHeaderTitle}>{subtitle}</Text>
            </View>
        </View>
    );
};

export default StackHeader;

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
    },

    scrollView: {
        marginHorizontal: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    subHeaderTitle: {
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'semibold',
        color: '#7C7C7C',
    },
});
