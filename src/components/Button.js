import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    return (
        <Container {...props}>
            <Icon xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
            </Icon>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60px;
    width: 60px;
    z-index: 50;
    background-color: ${props => props.theme.colors.black};
    border-radius: 0 16px 16px 0;
    cursor: pointer;

`;

const Icon = styled.svg`
    width: 11px;
    height: 14px;
`;

export default Button;
