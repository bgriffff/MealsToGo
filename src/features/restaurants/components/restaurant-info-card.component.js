import React from "react";
import styled from "styled-components/native"
import { Card } from 'react-native-paper';
import { SvgXml } from "react-native-svg";
import {Text, View, Image } from "react-native";

import {Spacer} from "../../../components/spacer/spacer.component"
import star from "../../../../assets/star"
import open from "../../../../assets/open"

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[2]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;


const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[1]}
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Rating = styled.View`
    padding-top: ${(props) => props.theme.space[1]}
    padding-bottom: ${(props) => props.theme.space[1]}
    flex-direction: row;
`;



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Big 5 Burgers',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random Street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <>
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0]}} />
                <Card.Content>
                    <Info>
                        <Title>{name}</Title>
                        <Section>
                            <Rating>
                                {ratingArray.map(()=> (
                                    <SvgXml xml={star} width={20} height={20}/> 
                                ))}
                            </Rating>
                            <SectionEnd>
                                {isClosedTemporarily && (
                                    <Text variant="label" style={{ color: "red" }}>
                                        CLOSED TEMPORARILY
                                    </Text> 
                                )}
                                
                                <Spacer variant="left.large" />
                                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                                <Spacer variant="left.large" />
                                <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                            </SectionEnd>
                        </Section>
                        <Address>{address}</Address>
                    </Info>
                </Card.Content>
                
            </RestaurantCard>
        </>
    )
}

