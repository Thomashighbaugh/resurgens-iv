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
    height:"100%",
    display:"border-block",
  },
  img: {
    maxWidth: 400,
    borderStyle: "double",
    borderColor: "#d5d5d5",
    borderWidth: "3px",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      display: "block",
      padding:"8%",
      margin:"10%",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "none",
    }
  },
  cardAndImage: {
    marginTop: "1em",
    display: "block",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#391CAF",
    padding: "2em",
    borderStyle: "double",
    borderColor: "#d5d5d5",
    borderWidth: "3px",
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      display: "inline-block",
      padding:"10%",
      margin:"10%",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "block",
      padding:"10%",
      margin:"8%",
    },
  },
  encompassingDiv: {
    backgroundImage: "url(' + http://tlh-resurgens.com/31.png + ')",
    padding: "1em",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "inherit",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      display: "inline",
      padding:"5%",
      margin:"5%",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      display: "inline",
      padding:"5%",
      marginTop:"2%",
      justifyContent: "center",
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
