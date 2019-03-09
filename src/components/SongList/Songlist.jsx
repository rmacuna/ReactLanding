import React from 'react';
import { theme } from '../AppTheme';
import styled from 'styled-components';
import { Media } from '../AppTheme';

const SongName = styled.ul`

    position: relative;
    font-weight: 600;
    font-size: 18px;
    list-style: none;
    color: #13003c;
    z-index: 100;
    transition: background 0.3s ease-out;
    padding: ${theme.constants.defaultListPadding};
    cursor: pointer;
    &:hover {
        background: rgba(240,240,240,.4);
    }
    .SongSub {
        position: relative;
        color: rgba(0,0,0,.5);
        font-size: 12px;
    }

`


const List = styled.ul`
    position: relative;
    padding-left: 40px;
    list-style: none;
    margin-left: 0;
    margin-top: ${props => props.top ? props.top : 'initial'};

    ${Media.phone`
        padding: 0;
        margin: 0;
        padding-top: 30px;
    `}

`

export const Songlist = (props) => {
    return (
        <List {...props}>
            {props.children}
        </List>
    );
};

export const SongTitle = (props) => {
    return (
        <SongName {...props}>
            <li>
                <div>
                    {props.children}
                </div>
                <span className="SongSub">{props.artist}</span>
            </li>
        </SongName>
    )
}

