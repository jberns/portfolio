import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import AppBar from './components/AppBar';
import Tabs from './components/Tabs';
import headerImage from './images/header.jpg';

class App extends Component {
  render() {
    const headerStyle = {
      height: '300px',
      width: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    };

    return (
      <div>
        <Grid container>
          <Hidden smDown>
            <Grid item sm={2} />
          </Hidden>
          <Grid item xs={12} md={8}>
            <AppBar />
            <Hidden xsDown>
              <div style={headerStyle}>
                <img src={headerImage} alt="Mountains Header" />
              </div>
            </Hidden>
            <Tabs />
          </Grid>
          <Hidden xsDown>
            <Grid item md={2} />
          </Hidden>
        </Grid>
      </div>
    );
  }
}

export default App;
