import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import SchedulePage from './src/pages/Schedule';
import Navigator from './src/components/Navigator';
import HomePage from './src/pages/Home';
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <SchedulePage />
            <HomePage /> */}
            {/* <Navigator /> */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
});
