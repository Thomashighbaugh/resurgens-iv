import React, { Component } from "react";

import AboutCard from "./AboutCard/AboutCard";
import ActionButtons from "./ActionButtons/ActionButtons";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";

import Slide from "@material-ui/core/Slide";
import { Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    height: "100vh",
    margin: 0,
    padding: 0
  },
  img: {
    maxWidth: 400,
    borderStyle: "double",
    borderColor: "#d5d5d5",
    borderWidth: "3px",
    margin:"10%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      margin: "2%",
      justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "none"
    }
  },
  cardAndImage: {
    display: "flex" ,
    flexDirection:"row",
    alignItems: "center",
    backgroundColor: "#391CAF",
    padding: "5%",
    justifySelf:"space-around",
    borderStyle: "double",
    borderColor: "#d5d5d5",
    borderWidth: "3px",
    margin: "10%",
    marginBottom: 0,
    [theme.breakpoints.down("xl")]: {
      justifyContent: "center",
      height: "auto"
    },
    [theme.breakpoints.down("md")]: {
      overflow: "scroll",
      padding: "2%",
      display: "flex",
      justifyContent: "center",
      height: "auto"
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "block",
      padding: "10%",
      margin: "8%"
    }
  },
  encompassingDiv: {
    backgroundImage: "url(' + http://tlh-resurgens.com/31.png + ')",
    height: "auto",
    background: "inherit",
    display:"block",
    [theme.breakpoints.down("xl")]: {
      flexDirection:"column",
      justifyContent: "center",
      height: "auto",
      width:"auto"
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      display: "inline",
      padding: "2%",
      margin: "2%"
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "inline",
      padding: "5%",
      marginTop: "2%",
      justifyContent: "center"
    }
  }
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "https://resurgens-iii.netlify.com/images/drapeaunoir.png"
    };
  }

  render() {
    const { classes } = this.props;
    const { image } = this.state;
    return (
      <Slide direction="right" in={true}>
        <Paper className={classes.encompassingDiv}>
          <div className={classes.cardAndImage}>
            <img src={image} className={classes.img} alt="" />
            <AboutCard image={image} />
          </div>
          <ActionButtons />
        </Paper>
      </Slide>
    );
  }
}

export default withStyles(styles)(About);
