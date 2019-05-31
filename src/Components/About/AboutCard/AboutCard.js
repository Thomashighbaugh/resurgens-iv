import React, { Component } from "react";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    margin:"2%",
    maxWidth: 350,
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
      borderStyle:"double",
      borderColor:"#d5d5d5",
      borderWidth:"3px",
  },
  cardMedia: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "inline"
    }
  }
});

class AboutCard extends Component {
  render() {
    const { classes, image } = this.props;

    return (
        <div>
      <Card className={classes.card}>
        <CardHeader
          title="About This Site:"
          titleTypographyProps={{
            component: "h5",
            variant: "h5",
            color: "secondary"
          }}
        />
        <CardMedia
          className={classes.cardMedia}
          image={image}
          component="img"
        />
        <CardContent>
          This site was made with React and is the fourth version of my
          portfolio site. This version also uses the latest in the Electric
          Tantra Design Paradigm to style the UI. Like the Material UI that it
          is based on, the UI is flat, responsive and inuitive. In addition, it
          builds upon this base with the addition of a "Neon Noir" theme and
          features custom graphics that are my original work!
        </CardContent>
      </Card>
        <Card className={classes.card}>
          <CardHeader
      title="About TLH:"
      titleTypographyProps={{
          component: "h5",
              variant: "h5",
              color: "secondary"
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
  </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
