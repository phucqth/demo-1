import {
    Pressable,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView,
} from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Settings = () => {
    const route = useRouter();
    const logOut = () => {
        //!TODO: Log out
        return route.replace('/login');
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Link replace href={{ pathname: 'profile' }}>
                    <Ionicons
                        name='chevron-back-sharp'
                        size={30}
                        color='black'
                    />
                </Link>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>
            <ScrollView
                style={styles.listContainer}
                contentContainerStyle={styles.innerList}
            >
                {/* Account Section */}
                <Text style={styles.groupTitle}>Account</Text>
                <View style={styles.settingGroup}>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <MaterialIcons name='person' size={24} />
                        <Text style={styles.text}>Profile</Text>
                    </Link>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <MaterialIcons name='verified-user' size={24} />
                        <Text style={styles.text}>Security</Text>
                    </Link>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <MaterialIcons name='notifications' size={24} />
                        <Text style={styles.text}>Notifications</Text>
                    </Link>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <Ionicons name='card' size={24} />
                        <Text style={styles.text}>Payment Methods</Text>
                    </Link>
                </View>
                {/* Support & About Section */}
                <Text style={styles.groupTitle}>Support & About</Text>
                <View style={styles.settingGroup}>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <Ionicons name='help-circle' size={24} />
                        <Text style={styles.text}>Help Center</Text>
                    </Link>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <Ionicons name='lock-closed' size={24} />
                        <Text style={styles.text}>Privacy Policy</Text>
                    </Link>
                    <Link
                        href={{ pathname: 'terms-of-service' }}
                        style={styles.link}
                    >
                        <Ionicons name='information-circle' size={24} />
                        <Text style={styles.text}>Terms of Service</Text>
                    </Link>
                </View>
                {/* Action Section */}
                <Text style={styles.groupTitle}>Actions</Text>
                <View style={styles.settingGroup}>
                    <Link
                        href={{ pathname: 'privacy-policy' }}
                        style={styles.link}
                    >
                        <Ionicons name='flag' size={24} />
                        <Text style={styles.text}>Report a problem</Text>
                    </Link>
                    <Pressable onPress={logOut} style={styles.link}>
                        <Ionicons name='log-out' size={24} />
                        <Text style={styles.text}>Log out</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff',
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
        backgroundColor: '#fff',
        borderColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    listContainer: {
        width: '100%',
    },
    innerList: {
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
    groupTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingGroup: {
        marginVertical: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 12,
    },
    link: {
        width: '100%',
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 35,
        fontSize: 16,
        fontWeight: 'semibold',
    },
});
