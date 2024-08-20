import { useRouter } from 'expo-router';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

const WellcomeTitle = () => {
    const router = useRouter();

    const handleAvatarPress = () => {
        router.push('/login');
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.wellcomeString}>Wellcome,</Text>
                <Text style={styles.nameString}>Jakub Scott</Text>
            </View>
            <Pressable
                onPress={() => {
                    handleAvatarPress();
                }}
            >
                <Image
                    source='https://i.pravatar.cc/100'
                    style={styles.avatar}
                />
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    wellcomeString: {
        fontSize: 16,
        color: '#8696BB',
    },
    nameString: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0D1B34',
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 50,
    },
});
export default WellcomeTitle;
