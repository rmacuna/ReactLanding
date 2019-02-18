import React from 'react';
import styled from 'styled-components';
import { theme, Media, MediaPortrait } from '../AppTheme';



const Footer = styled.footer`
    position: relative;
    max-width: 100%;
    overflow: hidden; 
    min-height: 400px;
    background: ${theme.constants.Footer.footerBackground}; 


`

const Container = styled.div` 
    position: relative;
    padding: 80px 48px;
    display: flex;
    width: 100%;


    ${Media.phone`
        flex-direction: column;
    `};
`

const BrandTitle = styled.div`

    width: 35%;
   
    h1  {
        position: relative;
        font-size: 67px;
        margin: 0; 
        color: ${theme.main.secondary};
    }

  
    
    ${Media.phone`
        flex-direction: column;
        width: 100%;
    `};

   

    ul {
        margin-top: 35px;
        padding: 0;
        li{
            list-style: none;
            cursor: pointer;
            font-size: 18px;
            color: #fff;
            font-weight: 600;
            padding: 15px 5px;
        }
    }
`

const BrandActions = styled.div`
    width: 60%;
    ${MediaPortrait.tablet`
        flex-direction: column;
        width: 100%;
    `};
`









const Appfooter = (props) => {
    return (
        <Footer {...props}>
            <Container>
                <BrandTitle>
                    <h1>Loudify.</h1>
                    <ul className="Actions">
                        <li>Top charts songs for you</li>
                        <li>Global Charts</li>
                        <li>My Account</li>
                        <li>Translate</li>
                    </ul>
                </BrandTitle>
                <BrandActions>
                    {props.children}
                </BrandActions>
            </Container>
        </Footer>
    );
};

export default Appfooter;