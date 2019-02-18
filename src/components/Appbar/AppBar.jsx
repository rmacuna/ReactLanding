import React from 'react';
import styled from 'styled-components';
import { theme, Media } from '../AppTheme';



const NavWrapper = styled.nav`
    position: relative;
    width: 100%;
    display: flex; 
    min-height: 62px;
    ${Media.phone`
        justify-content: center;
        ul {
            display: none;
        }
    `}
`

const BrandLogo = styled.a`
    position: relative;
    color: #fff;
    font-weight: 700;
    max-width: 150px;
    text-decoration: none;
    cursor: pointer;
    font-size: 40px;
    flex-grow: 1;
    display: inline-block;
    &:after {
        content: '';
        display: block;
        position: relative;
        margin-top: 3px;
        width: 100%;
        height: 6px;
        background: ${theme.main.secondary};
        border-radius: 6px;
    }
`

const Navigation = styled.ul`
    display: flex ;
    justify-content: flex-end;
    flex-grow: 5;
    margin: 0;
    align-items: center;
    li {
        list-style: none;
        font-weight: 600;
        padding: ${theme.constants.navItemsPadding};
        transition: color 0.4s ease-out;
        color: ${theme.constants.navItemColor};
        cursor: pointer;
    }
        
    li.active{
        color: ${theme.main.tertiary};
    }
    li {
        &:hover {
            color: ${theme.main.tertiary}
        }
    }

`

const AppBar = ({ props }) => {
    return (
        <NavWrapper {...props}>
            <BrandLogo href="#">
                Loudify.
            </BrandLogo>
            <Navigation>
                <li className="active">Home</li>
                <li>Sounds</li>
                <li>Perfomance </li>
                <li>Discover</li>
            </Navigation>
        </NavWrapper>


    );
};

export default AppBar;