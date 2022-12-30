import React from "react";
import { StyleSheet, Text, View} from 'react-native';

export const Content = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue" 
    },
    text: {
        padding: 16,
     }
  });