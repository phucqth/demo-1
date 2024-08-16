import { StyleSheet, View, Text, FlatList } from 'react-native';
import NavTab from '../components/NavTab';
import DoctorCard from '../components/DoctorCard';
export default function SchedulePage() {
    const scheduleList = ['1', '2', '3', '4', '5', '6', '7'];
    return (
        <View style={styles.container}>
            <NavTab />
            <FlatList
                style={styles.nearDoctor}
                data={scheduleList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <DoctorCard key={index} />}
            />
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
