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
              cardText="A portfolio site featuring the Electric Tantra Design Paradigm, Javascript, CSS3 and HTML5 coded by hand and from scratch! Responsive and aesthetic. The background graphic is my own custom work and the site is another example of the Electric Tantra Design Paradigm."
              cardImage="https://resurgens-iii.netlify.com/Project-Images/Resurgens3.png"
              githubLink="https://github.com/Thomashighbaugh/resurgens3"
              hostedLink="https://resurgens-iii.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Opitx"
              subtitle="Minimal Markdown Editor"
              cardText="A Markdown editor designed to put the user in control of their own files, built using React and Electron. A response to dissatisfaction with the available Markdown editors for Linux. Available as a DEB package, RPM package and AppImage."
              cardImage="https://raw.githubusercontent.com/Thomashighbaugh/Opitx/master/Opitx.png"
              githubLink="https://github.com/Thomashighbaugh/Opitx"
              hostedLink=""
              isHosted={false}
            />
            <Project
              title="Splash Page"
              subtitle="My Custom Homepage"
              cardText="Inspired by r/homepage, this is my custom homepage for all of my browsers. Demonstrates my Electric Tantra Design Paradigm and features several interesting functions written in JS like the search feature. Simply press the space bar, type in your search query and hit enter for Google search results."
              cardImage="https://resurgens-iii.netlify.com/Project-Images/Splash-Page.png"
              githubLink="https://github.com/Thomashighbaugh/splash-page"
              hostedLink="https://electric-tantra-splash-page.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Electric Tantra Themes"
              subtitle="A set of GTK3+ themes in the Electric Tantra Style."
              cardText=" These themes are another demonstration of the Electric Tantra style, but for Linux desktops! Written in the modified CSS of the GTK3 theme system, these themes also provide a basis for the development of additional interfaces and their use is often a proving ground for the style pallet."
              cardImage="https://raw.githubusercontent.com/Thomashighbaugh/Electric-Tantra-Themes/master/Images/Lingam.png"
              githubLink="https://github.com/Thomashighbaugh/second-blog-post-template"
              hostedLink="https://electric-tantra-themes.netlify.com"
              isHosted={true}
            />
            <Project
              title="EvoPopDark"
              subtitle="A modification of the EvoPop GTK3+ theme"
              cardText="As a distro-hopper who likes dark themes, this enables me to use the dark variation of EvoPop even without the toggle mode provided by the Budgie DE. Features a few extra modifications that make all the windows dark!"
              cardImage="https://resurgens-iii.netlify.com/Project-Images/EvoPopDark.png"
              githubLink="https://github.com/"
              hostedLink="https://github.com/Thomashighbaugh/EvoPopDark"
              isHosted={false}
            />
            <Project
              title="Colt45: GUI Edition"
              subtitle="A GUI Installer for Fast Provisioning"
              cardText="This shell script enables me to quickly provision a Ubuntu-based Linux machine with some of my most used programs. The GUI is based on Zenity."
              cardImage="https://resurgens-iii.netlify.com/Project-Images/Colt45GUI.png"
              githubLink="https://github.com/Thomashighbaugh/colt45gui"
              hostedLink="https://colt45gui.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Decommisioner"
              subtitle="A BASH script to generate package and repo manifests"
              cardText="A BASH script that prepares a manifest of installed packages and PPA repositories used by a system then turns the manifest into an installation script for restoring functionality after a reinstallation. Used for testing my custom variant of Ubuntu Budgie"
              cardImage="https://resurgens-iii.netlify.com/Project-Images/Decom.png"
              githubLink="https://github.com/Thomashighbaugh/Decommisioner"
              hostedLink="https://decommisioner.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Blog Post Template"
              subtitle="An example of my Electric Tantra Design as a blog post template"
              cardText="Designed to demonstrate the Electric Tantra Design Paradigm, this blog post template features my web design styling and does so with SCSS and HTML5 only. Can be adapted by anyone interested but posted mainly to demonstrate the aesthetics and prowess in design I bring to teams I am involved with!"
              cardImage="https://resurgens-iii.netlify.com/Project-Images/BlogTemplate.png"
              githubLink="https://github.com/Thomashighbaugh/blog-post-template"
              hostedLink="https://blog-post-template.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Blog Template 2"
              subtitle="The second blog post template made in the Electric Tantra style."
              cardText=" This template includes a thumbnail image for each of the posts it slides through and would work well if the page was intended as a directory to other pages, like the landing page of a blog. When time permits, it will be bundled with several extra pages using that same stylesheet so any potential users are as fully supported as possible."
              cardImage="https://resurgens-iii.netlify.com/images/Selection_026.png"
              githubLink="https://github.com/Thomashighbaugh/second-blog-post-template"
              hostedLink="https://second-blog-template-electric-tantra.netlify.com/"
              isHosted={true}
            />
            <Project
              title="Resurgens 2"
              subtitle="The second incarnation of the Resurgens Portfolio."
              cardText="An earlier example of the then formulating Electric Tantra Design Paradigm, this version of my portfolio was primarily designed for simplicity and functionality."
              cardImage="https://resurgens-iii.netlify.com/images/resurgens2.png"
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
