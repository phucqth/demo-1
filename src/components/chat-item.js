import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const ChatItem = ({ item }) => {
    const { name, online, image, lastChat, lastSeen } = item;
    const router = useRouter();
    const handlePress = () => {
        alert('Chat with ' + name);
        router.push('/chat');
    };
    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <View style={styles.avatarGroup}>
                    <Image source={image} style={styles.image} />
                    {online && <View style={styles.online} />}
                </View>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{lastChat}</Text>
                </View>
            </View>
            <Text style={styles.time}>{lastSeen}</Text>
        </Pressable>
    );
};

export default ChatItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatarGroup: {
        display: 'flex',
        position: 'relative',
        marginRight: 12,
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    online: {
        position: 'absolute',
        backgroundColor: 'green',
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        right: 0,
        top: 0,
    },
    name: {
        fontSize: 16,
        fontWeight: 'semibold',
    },
    message: {
        fontSize: 14,
        color: '#7C7C7C',
    },
});
