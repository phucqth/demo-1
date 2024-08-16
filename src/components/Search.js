import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container}>
            <Ionicons name='search' size={24} color='#8696BB' />
            <TextInput placeholder='Search' style={styles.searchInput} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 56,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 20,
    },
    searchInput: {
        marginLeft: 20,
        fontSize: 16,
        width: '80%',
        color: '#8696BB',
        underlineColor: 'transparent',
    },
});
export default Search;
