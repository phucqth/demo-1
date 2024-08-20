import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const NavigatorButton = (props) => {
    const { isFocused, label, routeName, color } = props;
    const iconsMap = {
        home: 'home',
        schedule: 'calendar',
        profile: 'menu',
        chat: 'chatbubble-ellipses',
    };
    return (
        <Pressable
            {...props}
            role='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            style={isFocused ? styles.tabItemActive : styles.tabItem}
        >
            <Ionicons
                name={iconsMap[routeName] + (!isFocused ? '-outline' : '')}
                size={24}
                color={!isFocused ? '#8696BB' : '#63B4FF'}
            />
            {isFocused ? <Text style={styles.text}>{label}</Text> : null}
        </Pressable>
    );
};

export default NavigatorButton;

const styles = StyleSheet.create({
    tabItem: {
        paddingHorizontal: 20.67,
        paddingVertical: 12,
        flexDirection: 'row',
    },
    tabItemActive: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(99,180,255,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    icon: {
        backgroundColor: 'red',
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 14,
        color: '#63B4FF',
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
