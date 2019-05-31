import React, { Component } from "react";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    height: "30%",
    backgroundColor: "#000",
    color: "#fff",
    borderStyle: "double",
    borderColor: "#d5d5d5",
    borderWidth: "5px",
    marginLeft: "1%"
  },
  cardMedia: {
    display: "none",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
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
            title="Resurgens:"
            titleTypographyProps={{
              component: "h5",
              variant: "h5",
              color: "secondary"
            }}
          />
          <CardContent>
            This site was made with React and is the fourth version of my
            portfolio site, branded Resurgens. The term is a Latin word that
            means rebirth, which is reflected in the English word resurgence. It
            is symbolic to TLH's rebirth as a developer and highlights the
            branding and design capabilities he brings with his studious
            dedication to functional and hand written code. This version of
            Resurgens was written as a series of React Components and styled
            using Material-UI. It is the culmination of self led learning TLH
            has done regarding React finally coming together into a functional
            portfolio site.
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            title="The Electric Tantra:"
            titleTypographyProps={{
              component: "h5",
              variant: "h5",
              color: "secondary"
            }}
          />
          <CardContent>
            This is the name of my personal design paradigm, which was used to
            style this site and all of the examples provided on the projects
            page. Based in part on the ideas of the Material UI paradigm
            produced by Google, the use of flat surfaces and contrasts in color
            help to make these designs capable on mobile and desktop. In
            addition to providing a mobile-optimized UX, this design pattern
            also focuses on creating darker interfaces, as to not hurt one's
            eyes if viewed at night, with neon flares that are used to cue the
            user's eye while keeping the pattern much more stylish than the drab
            designs typical of the user first approach.
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardHeader
            title="TLH:"
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
            A born again developer who recently discovered his eye for designs
            and photography. By merging these skills into web development, the
            Electric Tantra Design Paradigm has come into its own and is at the
            heart of this site's design. Currently doing freelance development
            work but striving to develop the prerequisite skills to join and
            enrich a professional development team.
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(AboutCard);
