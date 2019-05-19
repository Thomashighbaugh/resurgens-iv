import React, { Component } from "react";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    maxWidth: 350,
    padding: 20,
      backgroundColor:'#000',
      color:'#fff'
  },
  cardMedia: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline"
    }
  }
});

class AboutCard extends Component {
  render() {
    const { classes, image } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Thomas Leon Highbaugh"
          titleTypographyProps={{
            component: "h5",
            variant: "h5",
            align: "right"
          }}
        />
        <CardMedia
          className={classes.cardMedia}
          image={image}
          component="img"
        />
        <CardContent>
          A born again developer who recently discovered his eye for designs and
          photography. By merging these skills into web development, the
          Electric Tantra Design Paradigm has come into its own and is at the
          heart of this site's design. Currently doing freelance development
          work but always looking for team to learn and grow with.
        </CardContent>
        <CardContent>
          This site was made with React and is the fourth version of my
          portfolio site. This version also uses the latest in the Electric
          Tantra Design Paradigm to style the UI. Like the Material UI that it
          is based on, the UI is flat, responsive and inuitive. In addition, it
          builds upon this base with the addition of a "Neon Noir" theme and
          features custom graphics that are my original work!
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(AboutCard);
