import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Navigator from '../../components/Navigator';

export default function _layout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <Navigator {...props} />}
        >
            <Tabs.Screen name='home' options={{ title: 'Home' }} />
            <Tabs.Screen name='schedule' options={{ title: 'Schedule' }} />
            <Tabs.Screen name='chat' options={{ title: 'Chat' }} />
            <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({});
