import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
const Login = () => {
    const router = useRouter();
    const handleLogin = () => {
        //!TODO Login
        return router.replace('/home');
    };

    return (
        <ScrollView contentContainerStyle={styles.innerList}>
            <View style={styles.wellcomeSection}>
                <Text style={styles.title}>Wellcome!</Text>
            </View>
            <View style={styles.inputSection}>
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    textContentType='emailAddress'
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    textContentType='password'
                    secureTextEntry
                />
                <Link
                    push
                    href={{ pathname: 'otp' }}
                    style={styles.forgotPassword}
                >
                    Forgot Password?
                </Link>
            </View>
            <View style={styles.actionSection}>
                <Pressable onPress={handleLogin} style={styles.loginBtn}>
                    <Text style={styles.btnText}>Login</Text>
                </Pressable>
                <View style={styles.breaker}>
                    <View style={styles.breakerLine} />
                    <Text>Or Login With</Text>
                    <View style={styles.breakerLine} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Pressable style={styles.otherLogin}>
                        <Image
                            source={require('../../../assets/icons/google_ic.png')}
                            style={styles.loginIcon}
                        />
                    </Pressable>
                    <Pressable style={styles.otherLogin}>
                        <Image
                            source={require('../../../assets/icons/apple_ic.png')}
                            style={styles.loginIcon}
                        />
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Don't have an account? </Text>
                    <Link
                        href={{ pathname: 'register' }}
                        style={{ color: 'blue' }}
                    >
                        Register
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;
const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    innerList: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    wellcomeSection: {
        width: '100%',
        display: 'flex',
        height: '30%',
        justifyContent: 'center',
    },
    inputSection: {
        width: '100%',
        display: 'flex',
        height: '30%',
    },
    actionSection: {
        width: '100%',
        display: 'flex',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '100%',
        height: 56,
        borderRadius: 8,
        borderColor: '#DADADA',
        borderWidth: 1,
        marginBottom: 15,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#F7F8F9',
    },
    forgotPassword: {
        textAlign: 'right',
        fontSize: 14,
        color: 'gray',
    },
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
    otherLogin: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 12,
        borderColor: '#DADADA',
        borderWidth: 1,
        marginHorizontal: 8,
    },
    loginIcon: {
        width: 24,
        height: 24,
        // backgroundColor: '#000',
    },
    breaker: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    breakerLine: {
        width: '30%',
        height: 1,
        backgroundColor: '#DADADA',
    },
});
