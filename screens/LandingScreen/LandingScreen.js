import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Shivani is the best developer in the world!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

