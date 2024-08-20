import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='(tabs)' options={{}} />
            <Stack.Screen name='(aux)' options={{}} />
            <Stack.Screen name='(auth)' options={{}} />
            <Stack.Screen name='settings' options={{}} />
        </Stack>
    );
}
