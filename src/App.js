import React, { Component } from "react";

import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

//@material-ui imports
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5604d1",
      main: "#320575",
      dark: "#250457",
      contrastText: "#fff"
    },
    secondary: {
      light: "#dbdbdb",
      main: "#393939",
      dark: "#252525",
      contrastText: "#000"
    }
  }
});

const styles = theme => ({});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0
    };
  }

  handleChange(e, tabValue) {
    this.setState({ tabValue });
  }

  render() {
    const { tabValue } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar position="static">
            <Typography
              component="h2"
              variant="h3"
              color="inherit"
              align="center"
            >
              <span>Resurgens IV</span>
            </Typography>
            <Tabs
              value={tabValue}
              onChange={(e, tabValue) => this.handleChange(e, tabValue)}
              centered={true}
            >
              <Tab label="About" />
              <Tab label="Projects" />
              <Tab label="Skills" />>
            </Tabs>
          </AppBar>

          {tabValue === 0 && <About />}
          {tabValue === 1 && <Projects />}
          {tabValue === 2 && <Skills />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
