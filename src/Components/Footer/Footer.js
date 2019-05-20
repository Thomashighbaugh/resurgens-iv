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

const styles = theme => ({
  root: {
    backgroundColor: "#320575",
    color: "#fff",
    size: "5em"
  },
  footer: {
    color: "#320575",
    backgroundColor: "#000"
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
              <a href="http://tlh-resurgens.com">Thomas Leon Highbaugh</a> 2019
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
