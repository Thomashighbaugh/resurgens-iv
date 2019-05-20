import React, { Component } from "react";
import Contact from "./Contact/Contact";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  paper: {
    display: "flex",
    justifyContent: "space-around"
  }
});

class Contacts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Contact
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-6-xxl.png&f=1"
          link="https://github.com/Thomashighbaugh"
        />

        <Contact
          isLink={true}
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
          link="https://www.linkedin.com/in/thomas-leon-highbaugh"
        />

        <Contact
          isLink={false}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fapplication-icons%2Fcircle-icons-by-martz90%2Fpng%2F256x256%2Fgmail.png&f=1"
          link="thighbaugh@zoho.com"
        />
        <Contact
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffreevector.co%2Fwp-content%2Fuploads%2F2013%2F07%2Fgitlab.png&f=1"
          link="https://gitlab.com/Thomashighbaugh"
        />
        <Contact
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fbitbucket1600.png&f=1"
          link="https://bitbucket.org/%7B79ec23ad-82c2-4f18-ae06-c0211ab78906%7D/"
        />
        <Contact
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fuiconstock%2Fsocialmedia%2F512%2FDribbble-icon.png&f=1"
          link="https://www.dribbble.com/thighbaugh"
        />
        <Contact
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.chatham.edu%2Flibrary%2Ffiles%2F2017%2F11%2Finstagram_PNG10-1vdv6wi.png&f=1"
          link="https://instagram.com/tlh-resurgens"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);
