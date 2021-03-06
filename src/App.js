import React, { Component } from "react";
import "./App.css";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contact/Contacts";
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
    type: "dark",
    primary: {
      main: "#391CAF",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Audiowide", Roboto, monospace',
    color: "#fff",
    backgroundColor: "#000"
  },
  backgroundImage: "url(${%PUBLIC_URL%/src/Project-Images/31.png})"
});

const styles = theme => ({
  root: {
    fontFamily: "Audiowide",
    margin: "0"
  },

  appBar: {
    height: "5.5em",
    marginBottom:"0",
    [theme.breakpoints.down("xs")]: {
      height: "7em",
      marginBottom: "3em"
    }
  },
  tabsBar: {
    backgroundColor: "#391CAF",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
      backgroundColor: "#391CAF"
    }
  },
  a: {
    color: "#391CAF"
  }
});
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
    // noinspection HtmlDeprecatedAttribute
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar position="static" className={classes.appBar}>
            <Typography
              component="h3"
              variant="h2"
              color="inherit"
              align="center"
            >
              <span>Resurgens IV</span>
            </Typography>
            <Tabs
              className={classes.tabsBar}
              value={tabValue}
              onChange={(e, tabValue) => this.handleChange(e, tabValue)}
              centered={true}
            >
              <Tab label="About" />
              <Tab label="Projects" />
              <Tab label="Skills" />
              <Tab label="Contact" />
            </Tabs>
          </AppBar>

          {tabValue === 0 && <About />}
          {tabValue === 1 && <Projects />}
          {tabValue === 2 && <Skills />}
          {tabValue === 3 && <Contacts />}

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
