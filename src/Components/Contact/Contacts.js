import React, { Component } from "react";
import Contact from "./Contact/Contact";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";
import {Divider, Grid, Typography} from "@material-ui/core";

const styles = () => ({

  paper: {
    display: "flex",
      flexDirection:"row",
      maxWidth:"100%",
      flexWrap:"wrap",
      flexBasis:"33%",
      margin:"2%",
      // backgroundColor:"#320575"
      marginBottom:"10%"
  },
header:{
      marginBottom: "5%",
    backgroundColor:"#320575",
    padding:"1em"
},
    gridItem:{
      margin: "2%"
    }
});

class Contacts extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
          <Typography component="h4" variant="h4" className={classes.header}>
              Below are links to my profiles on various sites as well as my email and cell phone number. </Typography>
          <Grid className={classes.gridItem}
          item
          xs={12}
          style={{height: "95%"}}>
        <Contact
            className={classes.contact}
          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fgithub-6-xxl.png&f=1"
          link="https://github.com/Thomashighbaugh"
          title="GitHub"
        />

        <Contact
            className={classes.contact}
            isLink={true}
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
          link="https://www.linkedin.com/in/thomas-leon-highbaugh"
          title="LinkedIn"
        />

        <Contact
            className={classes.contact}

          isLink={false}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffiles.softicons.com%2Fdownload%2Fapplication-icons%2Fcircle-icons-by-martz90%2Fpng%2F256x256%2Fgmail.png&f=1"
          link="thighbaugh@zoho.com"
          title="Email"
        />
        <Contact
            className={classes.contact}

          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffreevector.co%2Fwp-content%2Fuploads%2F2013%2F07%2Fgitlab.png&f=1"
          link="https://gitlab.com/Thomashighbaugh"
        title="GitLab"
        />
        <Contact
            className={classes.contact}

          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fbitbucket1600.png&f=1"
          link="https://bitbucket.org/%7B79ec23ad-82c2-4f18-ae06-c0211ab78906%7D/"
        title="BitBucket"
        />
        <Contact
            className={classes.contact}

          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fuiconstock%2Fsocialmedia%2F512%2FDribbble-icon.png&f=1"
          link="https://www.dribbble.com/thighbaugh"
        title="Dribbble"
        />
        <Contact
            className={classes.contact}

          isLink={true}
          src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fblogs.chatham.edu%2Flibrary%2Ffiles%2F2017%2F11%2Finstagram_PNG10-1vdv6wi.png&f=1"
          link="https://instagram.com/tlh-resurgens"
        title="Instagram"
        />
          </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contacts);