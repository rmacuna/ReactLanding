import React from 'react';
import { theme } from '../AppTheme';
import styled, { css } from 'styled-components';


const styledShadowText = styled.h1`
    position: relative;
    font-size: ${props => props.fontSize ? props.fontSize : '80px'};
    color: ${props => props.color ? props.color : 'rgba(255,255,255,.10)'};
    font-weight: 700;
    margin-top: ${props => props.marginTop ? props.marginTop : '-47px'};
    text-align: ${props => props.align ? props.align : 'inherit'};
`
const StyledTitle = styled.h1`
    font-weight: ${props => props.light ? '600' : '700'};
    font-size: ${props => props.fontSize ? props.fontSize : '90px'};
    padding: ${props => props.padding ? props.padding : '0'};
    color: ${props => props.color ? props.color : '#13003c'};
`
const StyledSubtitle = styled.h2`
    font-weight: ${props => props.light ? '600' : '700'};
    font-size: ${props => props.fontSize ? props.fontSize : '65px'};
    padding: ${props => props.padding ? props.padding : '0'};
    color: ${props => props.color ? props.color : '#13003c'};
`

const StyledText = styled.p`
    font-weight: ${props => props.light ? '300' : '400'};
    padding: ${props => props.padding ? props.padding : '0'};
    color: ${props => props.color ? props.color : '#13003c'};
`

export const Text = (props) => {
    return (
        <StyledText {...props}>{props.children}</StyledText>
    )
}
export const ShadowText = (props) => {
    return (
        <styledShadowText {...props}>{props.children}</styledShadowText>
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
