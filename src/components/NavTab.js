import {
    FlatList,
    Text,
    StyleSheet,
    Pressable,
    View,
    Platform,
} from 'react-native';
import { normalize } from '../ultis/normalize';

const NavTab = ({ ...props }) => {
    return (
        <View style={styles.container}>
            <FlatList
                {...props}
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
                                // adjustsFontSizeToFit
                                style={
                                    index === 1
                                        ? styles.textActive
                                        : styles.text
                                }
                            >
                                {item}
                            </Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

const tabTextSize = normalize(16);
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 2,
        // backgroundColor: '#000',
    },
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
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#FAFAFA',
    },
    text: {
        fontSize: tabTextSize,
        color: '#8696BB',
        textAlign: 'center',
        textAlignVertical: 'center',
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
        fontSize: tabTextSize,
        fontWeight: 'bold',
        color: '#4894FE',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});
export default NavTab;
