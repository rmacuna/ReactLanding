import React from 'react';
import { theme } from '../AppTheme';
import styled, { css } from 'styled-components';

const StyledTitle = styled.h1`
    font-weight: ${props => props.light ? '600' : '700'};
    font-size: ${props => props.fontSize ? props.fontSize : '65px'};
    padding: ${props => props.padding ? props.padding : '0'};
    margin: 0;
    color: ${props => props.color ? props.color : '#13003c'};
`
const StyledSubtitle = styled.h2`
    margin: 0;
    font-weight: ${props => props.light ? '600' : '700'};
    font-size: ${props => props.fontSize ? props.fontSize : '65px'};
    padding: ${props => props.padding ? props.padding : '0'};
    color: ${props => props.color ? props.color : '#13003c'};
`

const Shadow = styled.h1`
    position: relative;
    font-size: ${props => props.fontSize ? props.fontSize : '112px'};
    color: ${props => props.color ? props.color : 'rgba(255,255,255,.10)'};
    font-weight: 700;
    margin: 0;
    margin-top: ${props => props.marginTop ? props.marginTop : '21px'};
    text-align: ${props => props.align ? props.align : 'inherit'};
`


const StyledText = styled.p`
    font-weight: ${props => props.weight ? props.weight : '400'};
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    padding: ${props => props.padding ? props.padding : '0'};
    text-align: ${props => props.align ? props.align :  'auto'};
    color: ${props => props.color ? props.color : '#13003c'};
    
    margin: ${props => props.margin ? props.margin : '0'};
`

export const Text = (props) => {
    return (
        <StyledText {...props}>{props.children}</StyledText>
    )
}
export const ShadowText = (props) => {
    return (
        <Shadow {...props}>{props.children}</Shadow>
    )
}

export const Subtitle = (props) => {
    return (
        <StyledSubtitle {...props}>{props.children}</StyledSubtitle>
    )
}

export const Title = (props) => {
    return (
        <StyledTitle {...props}>{props.children}</StyledTitle>
    )
}
