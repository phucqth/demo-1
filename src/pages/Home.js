import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import WellcomeTitle from '../components/Wellcome';
import DoctorCard from '../components/DoctorCard';
import Search from '../components/Search';
import Function from '../components/Function';
export default function HomePage() {
    return (
        <View style={styles.container}>
            <WellcomeTitle />
            <DoctorCard />
            <Search />
            <Function />
            <View style={styles.nearDoctor}>
                <Text style={styles.text}>Near Doctor</Text>
                <DoctorCard />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
