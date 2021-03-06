import React, { Component } from "react";
import ActionButton from "./ActionButton/ActionButton";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  paper: {
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    paddingBottom: "5.4%"
  }
});

class ActionButtons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <ActionButton
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Fsocial-circle%2F595%2Fgithub-512.png&f=1"
          link="https://github.com/Thomashighbaugh"
        />

        <ActionButton
          isLink={true}
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
          link="https://www.linkedin.com/in/thomas-leon-highbaugh"
        />

        <ActionButton
          isLink={false}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fapplication-icons%2Fcircle-icons-by-martz90%2Fpng%2F256x256%2Fgmail.png&f=1"
          link="thighbaugh@zoho.com"
        />
      </div>
    );
  }
}

export default withStyles(styles)(ActionButtons);
