import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import ChatItem from '../../components/chat-item';
import Search from '../../components/Search';

const charArray = [
    {
        id: 1,
        name: 'Hospital Services',
        online: true,
        image: 'https://i.pravatar.cc/111',
        lastChat: 'May I help you?',
        lastSeen: 'Yesterday',
    },
    {
        id: 2,
        name: 'Support',
        online: false,
        image: 'https://i.pravatar.cc/112',
        lastChat: 'Hi, I am here',
        lastSeen: 'Yesterday',
    },
    {
        id: 3,
        name: 'Dr. Imran Syahir',
        image: 'https://i.pravatar.cc/113',
        online: false,
        lastChat: 'Hello',
        lastSeen: 'Yesterday',
    },
    {
        id: 4,
        name: 'Dr. Abdul Rehman',
        image: 'https://i.pravatar.cc/114',
        online: true,
        lastChat: 'Hello',
        lastSeen: 'Yesterday',
    },
    {
        id: 5,
        name: 'Dr. Vikram Singh',
        image: 'https://i.pravatar.cc/115',
        online: false,
        lastChat: 'Hello',
        lastSeen: 'Yesterday',
    },
];
const Chat = () => {
    return (
        <View style={styles.container}>
            <Search />
            <ScrollView
                contentContainerStyle={styles.innerList}
                showsVerticalScrollIndicator={false}
                style={styles.listContainer}
            >
                {charArray.map((item) => (
                    <ChatItem key={item.id} item={item} />
                ))}
            </ScrollView>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    listContainer: {
        width: '100%',

        marginTop: 20,
    },
    innerList: {
        paddingBottom: 50,
        // paddingHorizontal: 24,
    },
});
