import React, { Component } from "react";
import Project from "./Project/Project";
//@material-ui/core
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slide direction="left" in={true}>
        <List>
          <Grid container justify="center">
            <Project
              title="Resurgens III"
              subtitle="The Third Version of My Portfolio Site"
              cardText="A portfolio site featuring the Electric Tantra Design Paradigm, Javascript, CSS3 and HTML5 coded by hand and from scratch! Responsive and aesthetic. The                            background graphic is my own custom work and the site is another example of the Electric Tantra Design Paradigm."
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/Resurgens3.png"
              githubLink="https://github.com/Thomashighbaugh/resurgens3"
              hostedLink="https://resurgens-iii.netlify.com/"
              isHosted={true}
            />

            <Project
              title="Splash Page"
              subtitle="My Custom Homepage"
              cardText="Inspired by r/homepage, this is my custom homepage for all of my browsers. Demonstrates my Electric Tantra Design Paradigm and features several interesting                         functions written in JS like the search feature. Simply press the space bar, type in your search query and hit enter for Google search results."
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/Splash-Page.png"
              githubLink="https://github.com/Thomashighbaugh/splash-page"
              hostedLink="https://electric-tantra-splash-page.netlify.com/"
              isHosted={true}
            />

            <Project
              title="EvoPopDark"
              subtitle="A modification of the EvoPop GTK3+ theme"
              cardText="As a distro-hopper who likes dark themes, this enables me to use the dark variation of EvoPop even without the toggle mode provided by the Budgie DE. Features a                    few extra modifications that make all the windows dark!"
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/EvoPopDark.png"
              githubLink="https://github.com/"
              hostedLink="https://github.com/Thomashighbaugh/EvoPopDark"
              isHosted={false}
            />
            <Project
              title="Colt45: GUI Edition"
              subtitle="A GUI Installer for Fast Provisioning"
              cardText="This shell script enables me to quickly provision a Ubuntu-based Linux machine with some of my most used programs. The GUI is based on Zenity."
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/Colt45GUI.png"
              githubLink="https://github.com/Thomashighbaugh/colt45gui"
              hostedLink="https://colt45gui.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Decommisioner"
              subtitle="A BASH script to generate package and repo manifests"
              cardText="A BASH script that prepares a manifest of installed packages and PPA repositories used by a system then turns the manifest into an installation script for                          restoring functionality after a reinstallation. Used for testing my custom variant of Ubuntu Budgie"
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/Decom.png"
              githubLink="https://github.com/Thomashighbaugh/Decommisioner"
              hostedLink="https://decommisioner.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Blog Post Template"
              subtitle="An example of my Electric Tantra Design as a blog post template"
              cardText="Designed to demonstrate the Electric Tantra Design Paradigm, this blog post template features my web design styling and does so with SCSS and HTML5 only. Can be                    adapted by anyone interested but posted mainly to demonstrate the aesthetics and prowess in design I bring to teams I am involved with!"
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/BlogTemplate.png"
              githubLink="https://github.com/Thomashighbaugh/blog-post-template"
              hostedLink="https://blog-post-template.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Resurgens 2"
              subtitle="The second incarnation of the Resurgens Portfolio."
              cardText="An earlier example of the then formulating Electric Tantra Design Paradigm, this version of my portfolio was primarily designed for simplicity and functionality.                   Unlike the more stylized versions of Resurgens, this version eschewed complex design patterns in order to create an interface that was functional and demonstrated Javascript                skills. As this site makes evident, my skills have improved dramatically since this site was the flagship of my efforts, nonetheless the interface remains compelling and so it              is still showcased in my "
              cardImage="https://resugens-iv.netlify.com//public/Project-Images/BlogTemplate.png"
              githubLink="https://github.com/Thomashighbaugh/resurgens-2"
              hostedLink="https://tlh-resurgens-v2.netlify.com/"
              isHosted={true}
            />
          </Grid>
        </List>
      </Slide>
    );
  }
}

export default Projects;
