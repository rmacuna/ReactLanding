import React from 'react';
import {theme} from '../AppTheme';
import styled from 'styled-components';



const List = styled.ul`
    position: relative;
    margin: 0;
    list-style: none;
    margin-top: ${props => props.top ? props.top : 'initial'};

    li {
        z-index: 100;
        transition: background 0.3s ease-out;
        padding: ${theme.constants.defaultListPadding};
        cursor: pointer;
        &:hover {
            background: rgba(250,250,250,1);
        }
    }

`

const Songlist = ({props}) => {
    return (
       <List>
           {props.children}
       </List>
    );
};

export default Songlist;