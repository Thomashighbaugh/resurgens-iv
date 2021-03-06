import React from "react";
import PropTypes from "prop-types";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5604d1",
      main: "#391CAF",
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

const styles = theme => ({
  root: {
    backgroundColor: "#391CAF",
    color: "#fff",
    size: "5em"
  },
  footer: {
    color: "#391CAF",
    backgroundColor: "#000",
    position:"fixed",
    height:50,
    bottom:0,
    left:0,
    right:0,
  },
  body: {
    marginBottom:50
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <footer className={classes.footer}>
        <Paper className={classes.root} elevation={1}>
          <Typography
            component="h6"
            variant="h6"
            color="inherit"
            align="center"
          >
            <span>
              Another Electric Tantra Site by{" "}
              Thomas Leon Highbaugh 2019
            </span>
          </Typography>
        </Paper>
      </footer>
    </MuiThemeProvider>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
