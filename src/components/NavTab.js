import {
    FlatList,
    Text,
    StyleSheet,
    Pressable,
    View,
    Platform,
} from 'react-native';

const NavTab = () => {
    return (
        <FlatList
            data={[
                'Canceled Schedule',
                'Completed schedule',
                'Upcoming schedule',
            ]}
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            horizontal
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable onPress={() => {}} key={index}>
                    <View
                        style={
                            index === 1
                                ? styles.listItemActive
                                : styles.listItem
                        }
                    >
                        <Text
                            style={
                                index === 1 ? styles.textActive : styles.text
                            }
                        >
                            {item}
                        </Text>
                    </View>
                </Pressable>
            )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listItem: {
        borderRadius: 20,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 12,
        backgroundColor: '#FAFAFA',
    },
    text: {
        fontSize: 16,
        color: '#8696BB',
    },
    listItemActive: {
        borderRadius: 20,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 12,
        backgroundColor: 'rgba(99,180,255,0.1)',
    },
    textActive: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4894FE',
    },
});
export default NavTab;
