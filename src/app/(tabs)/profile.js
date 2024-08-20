import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View>
            <Text>Profile</Text>
            <Link push href={{ pathname: 'settings' }}>
                <Ionicons name='settings-outline' size={30} color='black' />
            </Link>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({});
