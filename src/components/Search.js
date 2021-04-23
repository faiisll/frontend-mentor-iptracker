import React from 'react';
import styled from 'styled-components';

const Search = (props) => {
    return (
        <Container>
            <Input type="text" {...props} />
        </Container>
    );
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 16px 20px 16px 20px;
    z-index: 50;
    border-radius: 16px 0px 0 16px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    font-size: ${props => props.theme.fontSize.input};
    border: 0;
    outline: none;
    width: 100%;
`;

export default Search;
