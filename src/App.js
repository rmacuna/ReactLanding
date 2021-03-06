import React, { Component } from 'react';
import AppBar from './components/Appbar';
import './App.scss';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import { theme } from './components/AppTheme';
import { ShadowText, Title, Subtitle, Text } from './components/Typography/Typography';
import AppContainer from './components/AppContainer';
import Top50 from './images/top50.png';
import charliePuth from './images/charlieputh.png';
import MartinGarrixImage from './images/martingarrix.png';
import SkewedTag from './components/SkewedTag';
import { Songlist, SongTitle } from './components/SongList/Songlist';
import Appfooter from './components/Appfooter';

class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="MainWrapper Linear--purple__background">
          {/* Background of martin garrix and Charlie Puth */}
          <div className="MainWrapperBackground"></div>

          {/* Appbar  */}
          <AppBar />

          {/* Main Container that flex two items , the right section that have a image of Martin Garrix and Charlie Puth and left section contains texts and descriptions */}
          <div className="MainContainer">
            <div className="TextSection">
              <ShadowText>MUSIC</ShadowText>
              <Title color="#fff">Sound s Good</Title>
              <Subtitle color={theme.main.tertiary} fontSize="90px">Sounds Louder</Subtitle>
              <AppContainer textContainer left="0" right="0" width="510px">
                <Text margin="16px 0" align="justify" color="#fff" fontSize="21px">
                  Prepare for a list of incredible music with Loudify Get newest tracks and follow the creations of your favorite artist.
                </Text>
              </AppContainer>
              <ShadowText marginTop="45px">NOW</ShadowText>
              <Text className="Cursor" fontSize="18px" weight="600" margin="12px 0" color={theme.main.secondary}> Turn up the speakers</Text>
            </div>
            <div className="ImageSection">
              <img className="hideOnPhone InitialImage" src={Top50} alt="MartinGarrix, Charlie Puth" />
            </div>
          </div>

        </div>

        {/* Category Divider */}
        <div className="CategoryDivider BlackPurple">
          <AppContainer height="300px" className="center-items">
            <SkewedTag>
              <h1>ELECTRONIC DANCE MUSIC</h1>
            </SkewedTag>
          </AppContainer>
        </div>


        {/* Starts of the second wrapper */}
        <div className="SecondWrapper">

          <div className="GreeenPathBackground"></div>

          {/* Container that wraps the two sections (left and right)  */}
          <div className="MainContainer">

            <div className="TextSection">
              <AppContainer top="48px" bottom="48px" left="50px" right="50px" textContainer>
                <Title fontSize="110px" color={theme.main.secondary}>Loudify.</Title>
                <Subtitle fontSize="80px" color="#13003c" >Martin Garrix</Subtitle>
                <Songlist top="120px">
                  <SongTitle artist="Martin Garrix & Dua Lipa">Scared To Be Lonely</SongTitle>
                  <SongTitle artist="Martin Garrix & David Guetta">So Far Away</SongTitle>
                  <SongTitle artist="Martin Garrix, Julian Jordan">Glitch</SongTitle>
                  <SongTitle artist="Martin Garrix ft Khalid ">Ocean</SongTitle>
                </Songlist>

                {/* Wrap tags inside container prevent tag overflow  on small screens */}
                <div className="TagContainer">
                  <SkewedTag top="30px">
                    <h1>TOP 1 DJ MAG LOUDIFY</h1>
                  </SkewedTag>
                </div>


              </AppContainer>
            </div>

            <div className="ImageSection__Garrix">
              <img className="MartinImage" src={MartinGarrixImage} alt="Martin Garrix" />
            </div>

          </div>

        </div>

        {/* Category divider */}
        <div className="CategoryDivider GreenYellow">
          <AppContainer height="300px" className="center-items">
            <SkewedTag width="400px">
              <h1>POP MUSIC</h1>
            </SkewedTag>
          </AppContainer>
        </div>


        {/* Starts the third Wrapper */}

        <div className="ThirdWrapper Yellow">

          <div className="CharlieBackground"></div>
          {/* Main Section With Background */}
          <div className="MainContainer">

            <div className="ImageSection_Charlie">
              <img className="ImageCharlie" src={charliePuth} alt="Charlie Puth" />
            </div>
            <div className="TextSection Charlie">
              <AppContainer width="100%" top="40px" textContainer>
                <div className="AlignToRight">
                  <Title fontSize="114px" color="#664a00">LOUDIFY.</Title>
                </div>
                <Subtitle fontSize="98px" color="#009344">Charlie Puth</Subtitle>

                <AppContainer textContainer top="30px">

                  <Songlist>
                    <SongTitle artist="Charlie Puth ft Selena Gomez">We don't talk anymore</SongTitle>
                    <SongTitle artist="Charlie Puth">Attention</SongTitle>
                    <SongTitle artist="Charlie Puth">How Long</SongTitle>
                    <SongTitle artist="Charlie Puth">One Call Away</SongTitle>
                  </Songlist>

                  <SkewedTag top="30px" background="#2d1555" color="#ffef3f">
                    <h1>Loudify Charlie</h1>
                  </SkewedTag>
                </AppContainer>

              </AppContainer>
            </div>
          </div>




        </div>


        {/* Starts the fourth section */}

        <div className="FourthWrapper BluePurple">

          <div className="BrandWrapper">
            <Title fontSize="44px" color="#fff">Loudify.</Title>
          </div>
          <div className="WrapperFlex">
            <div className="GreenBox">
              <div className="content">
                <Title color="rgba(118,41,245,1)">Hot News</Title>
                <Subtitle fontSize="24px">DISCOVER NEW TRACKS EVERYDAY</Subtitle>
                <AppContainer top="50px" left="0" right="0" textContainer>
                  <Text weight="400" fontSize="24px" align="justify">
                    Loudify look for the top charts rin a lot of rankings, including spotify and deezer. The top artist will appear in the landing page so you can play their songs just with a click
                  </Text>
                </AppContainer>
              </div>
            </div>
          </div>
          <ShadowText marginTop="-10px">MUSIC SOUNDS GOOD</ShadowText>
        </div>


        {/* Footer of the page */}

        <Appfooter>
          <SkewedTag background="#fff" color="#2d1555" width="300px"><h1>Subscribe</h1></SkewedTag>
          <div className="Copyright_Container">
            <Text color={theme.main.secondary} weight="600">Copyright 2019 Roberto Acuña</Text>
          </div>
        </Appfooter>
      </React.Fragment>

    );
  }
}

export default App;
