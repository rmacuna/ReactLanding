import React from 'react';
import styled from 'styled-components';
import {theme, Media} from '../AppTheme';


const Tag = styled.div`

    position: relative;
    height: 100px;
    margin-top: ${props => props.top ? props.top : '10px' };
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;

    /* width: ${props => props.width ? props.width : 'auto'}; */
    padding: 5px 15px;

    background: ${props => props.background ? props.background : '#000'};
    color: ${props => props.color ? props.color : theme.main.secondary };
    transform: ${theme.constants.SkewedTag.skewTagDegree};

    box-shadow: ${theme.constants.SkewedTag.skewTagShadow};
    
    h1 {
        /* font-size: ${props => props.fontSize ? props.fontSize : ''}; */
        transform: ${theme.constants.SkewedTag.skewTagDegreeContent};
    }



    ${Media.phone`
        width: 100%;
        h1 {
            font-size: 1.25em
        }
    
    `}


    

`


const SkewedTag = (props) => {
    return (
        <Tag {...props}>{props.children}</Tag>
    );
};

export default SkewedTag;