import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import SchedulePage from './src/pages/Schedule';
import HomePage from './src/pages/Home';
import NavTab from './src/components/NavTab';
export default function App() {
    return (
        <View style={styles.container}>
            <SchedulePage />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
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
