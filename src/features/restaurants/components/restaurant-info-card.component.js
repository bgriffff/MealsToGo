import React from "react";
import styled from "styled-components/native"
import { Avatar, Button, Card, Text, withTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
    padding: ${(props) => props.theme.space[0]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

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
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0]}} />
                <Card.Content>
                    <Title>{name}</Title>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                
            </RestaurantCard>
        </>
    )
}

