import { View, Text, StyleSheet } from 'react-native';

const Navigator = () => {
    return (
        <View style={styles.tabBar}>
            <View style={styles.tabItem}>
                <Text style={styles.text}>Home</Text>
            </View>
            <View style={styles.tabItemActive}>
                <Text style={styles.text}>Schedule</Text>
            </View>
        </View>
    );
};

export default Navigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        paddingBottom: 0,
        bottom: 20,
        left: 24,
        right: 24,
        elevation: 0,
        borderRadius: 28,
        height: 50,
        marginVertical: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabItem: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        // borderRadius: 28,
    },
    tabItemActive: {
        height: '100%',
        backgroundColor: 'rgba(99,180,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        borderRadius: 28,
    },
    text: {
        color: '#fff',
    },
});
