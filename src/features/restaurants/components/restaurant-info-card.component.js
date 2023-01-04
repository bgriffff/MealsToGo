import React from "react";
import { Avatar, Button, Card, Text, withTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Big 5 Burgers',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random Street",
        openingHours = true,
        rating = 4,
        isClosedTemporarily = false,
    } = restaurant;

    return (
        <>
            <Card elevation={5} style={styles.card}>
                <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}} />
                <Card.Content>
                    <Text variant="titleLarge">{name}</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                
            </Card>
        </>
    )
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
    },
    cover: {
      padding: 5,
      backgroundColor: "white",
    }
  });