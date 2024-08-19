import { StyleSheet, View, FlatList } from 'react-native';
import NavTab from '../components/NavTab';
import DoctorCard from '../components/DoctorCard';

export default function SchedulePage() {
    const scheduleList = ['1', '2', '3', '4', '5', '6', '7'];
    return (
        <View style={styles.container}>
            <NavTab style={{ marginVertical: 10 }} />
            <FlatList
                contentContainerStyle={styles.innerList}
                data={scheduleList}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <DoctorCard key={index} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    innerList: {
        // paddingVertical: 10,
        paddingBottom: 90,
        paddingHorizontal: 24,
        width: '100%',
    },
});
