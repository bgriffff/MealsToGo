import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Search } from './src/features/Search'
import { Content } from './src/features/Content'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search/>
      <Content/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
