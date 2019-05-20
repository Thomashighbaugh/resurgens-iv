import React, { Component } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

//@material-ui imports
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";

const styles = () => ({
    imgIcon: {
        width: 200,
        height: 200,
        borderColor:"#d5d5d5",
        borderWidth:"3px",
        borderStyle:"double",
        backgroundColor:"#000",
        borderRadius:"25%"
    },
title:{
        display:"flex",
    alignItems:"center",
},
iconButton:{
        backgroundColor: "#320575",
    borderWidth:"3px",
    borderStyle:"double",
    borderColor:"d5d5d5",
    borderRadius: "0%",
}
});

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSnackbarOpen: false
        };
    }

    toggleSnackbar() {
        const { isSnackbarOpen } = this.state;
        this.setState({ isSnackbarOpen: !isSnackbarOpen });
    }

    render() {
        const { src, link, classes, isLink,title } = this.props;
        const { isSnackbarOpen } = this.state;

        return (
            <button>
                {isLink ? (
                    <IconButton className={classes.iconButton} component="a" href={link} target="blank">
                        <div>
                        <img src={src} className={classes.imgIcon} alt={title} />
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        </div>
                    </IconButton>
                ) : (
                    <CopyToClipboard text={link} onCopy={() => this.toggleSnackbar()}>
                        <IconButton className={classes.iconButton}>
                            <div>
                            <img src={src} className={classes.imgIcon} alt={title} />

       <Typography component="h5" variant="h5">
           {title}
       </Typography>
                            </div>
       </IconButton>
                    </CopyToClipboard>
                )}

                <Snackbar
                    open={isSnackbarOpen}
                    message={
                        <Typography color="inherit">Email copied to clipboard!</Typography>
                    }
                    onClose={() => this.toggleSnackbar()}
                    autoHideDuration={2000}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                />
                </button>
        );
    }
}

export default withStyles(styles)(Contact);
