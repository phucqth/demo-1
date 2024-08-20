import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import WellcomeTitle from '../../components/Wellcome';
import DoctorCard from '../../components/DoctorCard';
import Search from '../../components/Search';
import Function from '../../components/Function';
import EndBlock from '../../components/EndBlock';
export default function HomePage() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.innerList}
        >
            <WellcomeTitle />
            <DoctorCard />
            <Search />
            <Function />
            <View style={styles.nearDoctor}>
                <Text style={styles.text}>Near Doctor</Text>
                <DoctorCard />
            </View>
            <EndBlock />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight || 0,
        padding: 24,
    },
    innerList: { alignItems: 'center' },
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
