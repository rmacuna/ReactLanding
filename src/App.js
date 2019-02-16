import React, { Component } from 'react';
import AppBar from './components/Appbar';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { theme } from './components/AppTheme';
import { ShadowText, Title, Subtitle, Text } from './components/Typography/Typography';
import AppContainer from './components/AppContainer';
import CharlieImage from './images/top50.png';

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
              <Title color="#fff">Sounds Good</Title>
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
              <img className="hideOnPhone" src={CharlieImage} alt="MartinGarrix, Charlie Puth"/>
            </div>
          </div>

        </div>
        <div className="SecondWrapper">

        </div>



      </React.Fragment>

    );
  }
}

export default App;
