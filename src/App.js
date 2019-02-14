import React, { Component } from 'react';
import AppBar from './components/Appbar';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typography from './components/Typography';


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <div className="MainWrapper Linear--purple__background">
          <AppBar></AppBar>
          <Grid fluid>
            <Row>
              <Col xs={12}>
                <Typography></Typography>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="SecondWrapper">

        </div>



      </React.Fragment>

    );
  }
}

export default App;
