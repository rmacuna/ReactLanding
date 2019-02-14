import React, { Component } from 'react';
import AppBar from './components/Appbar';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { theme } from './components/AppTheme';
import { ShadowText, Title, Subtitle, Text } from './components/Typography/Typography';
import AppContainer from './components/AppContainer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="MainWrapper Linear--purple__background">
          <AppBar></AppBar>
          <ShadowText>MUSIC</ShadowText>
          <Title color="#fff">Sounds Good</Title>
          <Subtitle color={theme.main.tertiary} fontSize="90px">Sounds Louder</Subtitle>
          <AppContainer textContainer left="0" right="0" width="510px">
            <Text margin="16px 0" align="justify"  color="#fff" fontSize="21px">
              Prepare for a list of incredible music with Loudify Get newest tracks and follow the creations of your favorite artist.
            </Text>
          </AppContainer>
          <ShadowText marginTop="45px">NOW</ShadowText>
          <Text fontSize="18px" weight="600" margin="12px 0" color={theme.main.secondary}> Turn up the speakers</Text>
          {/* <Grid fluid>
            <Row>
              <Col xs={12}>
              </Col>
            </Row>
          </Grid> */}
        </div>
        <div className="SecondWrapper">

        </div>



      </React.Fragment>

    );
  }
}

export default App;
