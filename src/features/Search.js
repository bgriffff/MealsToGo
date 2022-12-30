import React from "react";
import { StyleSheet, Text, View} from 'react-native';

export const Search = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the search bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      alignContent: 'center', 
    },
    text: {
       padding: 16,
    }
  });