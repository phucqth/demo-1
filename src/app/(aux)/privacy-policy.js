import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import React from 'react';
import data from '../../fake-api/privacy-policy.json';
import StackHeader from '../../components/stack-header';
const PrivacyPolicy = () => {
    return (
        <View style={styles.container}>
            <StackHeader
                title={'Privacy Policy'}
                subtitle={'Updated on November 17, 2022'}
            />
            <FlatList
                data={data}
                contentContainerStyle={styles.scrollView}
                renderItem={({ item }) => (
                    <View style={styles.sectionContainer} key={item.id}>
                        <Text style={styles.sectionTitle}>{item.title}</Text>
                        <Text style={styles.text}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    sectionContainer: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});
