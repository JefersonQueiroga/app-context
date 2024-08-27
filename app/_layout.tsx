import { Stack } from 'expo-router';
import { EspetinhoProvider } from '@/hooks/EspetinhoContext'; // ajuste o caminho conforme sua estrutura de pastas

export default function RootLayout() {
   return (
    <EspetinhoProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="conta" />
      </Stack>
    </EspetinhoProvider>
  );
}
