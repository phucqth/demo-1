import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DoctorCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <View style={styles.doctorInfo}>
                    <Image
                        source='https://i.pravatar.cc/110'
                        style={styles.doctorAvatar}
                    />
                    <View style={styles.doctorTitle}>
                        <Text style={styles.doctorName}>Dr. Imran Syahir</Text>
                        <Text style={styles.doctorSpeciality}>
                            Dr. Imran Syahir
                        </Text>
                    </View>
                </View>
                <MaterialIcons
                    name='arrow-forward-ios'
                    size={20}
                    color='white'
                />
            </View>
            <View style={styles.horizontalBreaker} />
            <View style={styles.doctorSchedule}>
                <View style={styles.doctorScheduleItem}>
                    <Ionicons name='calendar' size={20} color='white' />
                    <Text style={styles.doctorScheduleText}>
                        Sunday, 12 June
                    </Text>
                </View>
                <View style={styles.doctorScheduleItem}>
                    <Ionicons name='time' size={20} color='white' />
                    <Text style={styles.doctorScheduleText}>
                        11:00 - 12:00 AM
                    </Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 20,
        marginTop: 32,
        backgroundColor: '#4894FE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    containerTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 20,
    },
    doctorTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginLeft: 12,
    },
    doctorInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doctorName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    doctorSpeciality: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'left',
    },
    horizontalBreaker: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 1,
        marginVertical: 16.5,
        backgroundColor: '#fff',
    },
    doctorAvatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    doctorSchedule: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: 19,
    },
    doctorScheduleItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    doctorScheduleText: {
        color: '#fff',
        fontSize: 12,
        marginLeft: 8,
    },
});
export default DoctorCard;
