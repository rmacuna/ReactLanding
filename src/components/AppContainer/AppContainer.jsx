import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    margin-left: ${props => props.textContainer ? 0: 'auto'};
    margin-right: ${props => props.textContainer ? 0: 'auto'};
    max-width: ${props => props.width ? props.width : '950px'};;
    padding-left: ${props => props.left ? props.left : '15px'};
    padding-right: ${props => props.right ? props.right : '15px'};
    padding-top: ${props => props.top ? props.top: 'auto'};
    padding-bottom: ${props => props.bottom ? props.bottom : 'auto'};


    height: ${props => props.height ? props.height : 'auto'};
`

const AppContainer = (props) => {
    return (
        <Container {...props}> {props.children}</Container>
    );
};

export default AppContainer;
