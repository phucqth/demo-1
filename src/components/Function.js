import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const Function = () => {
    return (
        <View style={styles.container}>
            {functionList.map((item, index) => (
                // function item
                <View style={styles.item} key={index}>
                    <View style={styles.iconContainer}>
                        <Ionicons name={item.icon} size={24} color='#4894FE' />
                    </View>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
            ))}
        </View>
    );
};

const functionList = [
    {
        name: 'Covid 19',
        icon: 'home',
    },
    {
        name: 'Doctor',
        icon: 'umbrella-sharp',
    },
    {
        name: 'Medicine',
        icon: 'home',
    },
    {
        name: 'Hospital',
        icon: 'home',
    },
];

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginTop: 24,
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 72,
        height: 72,
        borderRadius: 99,
        backgroundColor: '#FAFAFA',
    },
    text: {
        color: '#8696BB',
        fontSize: 15,
        marginTop: 8,
    },
});

export default Function;
