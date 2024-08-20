import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import FullButton from '../../components/full-button';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const OtpScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View>
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                    style={styles.backButton}
                >
                    <Ionicons
                        name='chevron-back-sharp'
                        size={40}
                        color='#000'
                    />
                </Pressable>
                <Text style={styles.title}>OTP Verification</Text>
                <Text style={styles.subtitle}>
                    Enter the verification code we just sent you on your email
                    address.
                </Text>
                <View style={styles.otpContainer}>
                    <OtpInput
                        numberOfDigits={4}
                        onTextChange={(text) => console.log(text)}
                        textInputProps={{
                            accessibilityLabel: 'One-Time Password',
                        }}
                        theme={{
                            container: styles.otpInputContainer,
                            pinCodeContainerStyle: styles.emtyInput,
                            filledPinCodeContainerStyle: styles.filledInput,
                        }}
                    />
                </View>
                <FullButton
                    handlePress={() => {
                        handleVerify;
                    }}
                    text={'Verify'}
                />
            </View>
            <View style={styles.resendContainer}>
                <Text>Didn't receive code? </Text>
                <Pressable onPress={resendCode}>
                    <Text style={styles.resendText}>Resend code</Text>
                </Pressable>
            </View>
        </View>
    );
};
const handleVerify = () => {
    //!TODO: Verify code
};
const resendCode = () => {
    //!TODO: Resend code
    alert('Resend code');
};

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 30,
    },
    backButton: {
        width: 70,
        height: 70,
        borderRadius: 15,
        backgroundColor: '#F7F8F9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#7C7C7C',
    },
    otpContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 60,
    },
    emtyInput: {
        backgroundColor: '#F7F8F9',
        width: 60,
        height: 60,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8ECF4',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    filledInput: {
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#35C2C1',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
    },
    resendContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    resendText: {
        // fontSize: 18,
        color: 'blue',
    },
});
