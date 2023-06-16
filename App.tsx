import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <Text className="text-black">Hello World</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
