import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    return (
        <Container>
            <CardItem>
                <Label>IP ADDRESS</Label>
                <Content>{props.ip}</Content>
            </CardItem>
            <Line></Line>
            <CardItem>
                <Label>LOCATION</Label>
                <Content>{props.country}, {props.region} {props.postalCode}</Content>
            </CardItem>
            <Line></Line>
            <CardItem>
                <Label>TIMEZONE</Label>
                <Content>UTC {props.timezone}</Content>
            </CardItem>
            <Line></Line>
            <CardItem>
                <Label>ISP</Label>
                <Content>{props.isp}</Content>
            </CardItem>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 50;
    min-height: 150px;
    text-align: center;
    @media ${(props) => props.theme.device.tablet} {
        text-align: left;
        
        flex-direction: row;
    }
`;

const Label = styled.h1`
    font-size: 12px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: ${props => props.theme.colors.gray100};

`;

const Content = styled.p`
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 500;
    color: ${props => props.theme.colors.gray200};
`;

const CardItem = styled.div`
    padding: 10px;
    @media ${(props) => props.theme.device.tablet} {
        max-width: 200px;
    }
`;

const Line = styled.div`
    height: 76px;
    border-right: 1px solid black;
    width: 0;
    opacity: 0.2;
    align-self: center;
    display: none;

    @media ${(props) => props.theme.device.tablet} {
        display: flex;
    }
`;


export default Card;
