import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRef } from 'react';
const Search = () => {
    const inputRef = useRef(null);
    return (
        <View style={styles.container} onPress={() => inputRef.current.focus()}>
            <Ionicons name='search' size={24} color='#8696BB' />
            <TextInput
                placeholder='Search'
                style={styles.searchInput}
                ref={inputRef}
            />
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
