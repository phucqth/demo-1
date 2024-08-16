import { StyleSheet, View, Text } from 'react-native';
import NavTab from '../components/NavTab';
export default function SchedulePage() {
    return (
        <View style={styles.container}>
            <NavTab />
            <Text style={styles.text}>Near Doctor</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 24,
    },
    nearDoctor: {
        display: 'flex',
        marginTop: 32,
        width: '100%',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
