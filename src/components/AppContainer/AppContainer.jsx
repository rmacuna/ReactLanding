import styled from 'styled-components';

import React from 'react';

const Container = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: 950px;
    padding-left: ${props => props.left ? props.left : '15px'};
    padding-right: ${props => props.right ? props.right : '15px'};
    padding-top: ${props => props.top ? props.top: 'auto'};
    padding-bottom: ${props => props.bottom ? props.bottom : 'auto'};

`


const AppContainer = ({props}) => {
    return (
        <Container {...props}>{props.children}</Container>
    );
};

export default AppContainer;
